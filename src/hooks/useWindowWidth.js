import { useState, useEffect } from "react";

// Ekran genişliğini döndüren custom hook
const useWindowWidth = () => {
  // Ekran genişliğini state olarak tut
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    // Pencere genişliği değiştiğinde state'i güncelleyen fonksiyon
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Pencere boyutları değiştiğinde handleResize fonksiyonunu çağır
    window.addEventListener("resize", handleResize);

    // Bileşen unmont edildiğinde event listener'ı temizle
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Boş bağımlılık dizisi, bu effect sadece mount ve unmount sırasında çalışır

  return windowWidth;
};

export default useWindowWidth;
