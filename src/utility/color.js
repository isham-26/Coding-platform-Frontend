const getLevelColor = (level) => {
    const levelColors = {
      L1: "text-green-600",
      L2: "text-green-700",
      L3: "text-lime-700",
      L4: "text-yellow-600",
      L5: "text-yellow-700",
      L6: "text-orange-700",
      L7: "text-orange-800",
      L8: "text-red-600",
      L9: "text-red-700",
      L10: "text-red-800 font-bold",
    };
    return levelColors[level] || "text-gray-700";
  };
export default getLevelColor
  