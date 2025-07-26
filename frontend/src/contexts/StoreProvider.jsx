import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  // Configuration
  const config = {
    currency: "$",
    deliveryFee: 10,
    backendUrl: import.meta.env.VITE_BACKEND_URL
  };

  // State management
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [cart, setCart] = useState({});
  const [catalog, setCatalog] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const navigate = useNavigate();

  // Cart management
  const getCartTotal = () => {
    let total = 0;
    for (const item in cart) {
      if (cart[item] > 0) {
        total += cart[item];
      }
    }
    return total;
  };

  const addToCart = async (itemId) => {
    if (!token) {
      toast.error("Please login to add items to cart");
      navigate("/login");
      return;
    }

    try {
      const response = await axios.post(
        `${config.backendUrl}/cart/add`,
        { productId: itemId },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCart(response.data.cart);
      toast.success("Item added to cart");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to add item");
    }
  };

  const removeFromCart = async (itemId) => {
    try {
      const response = await axios.delete(
        `${config.backendUrl}/cart/remove/${itemId}`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setCart(response.data.cart);
      toast.success("Item removed from cart");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to remove item");
    }
  };

  // Product catalog
  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${config.backendUrl}/products`);
      setCatalog(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  // Load initial data
  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCart = async () => {
      if (token) {
        try {
          const response = await axios.get(`${config.backendUrl}/cart`, {
            headers: {
              Authorization: token,
            },
          });
          setCart(response.data.cart);
        } catch (error) {
          console.error("Error fetching cart:", error);
        }
      }
    };
    fetchCart();
  }, [token]);

  const contextValue = {
    ...config,
    searchQuery,
    setSearchQuery,
    isSearchVisible,
    setIsSearchVisible,
    cart,
    setCart,
    catalog,
    setCatalog,
    token,
    setToken,
    getCartTotal,
    addToCart,
    removeFromCart,
    navigate
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;
