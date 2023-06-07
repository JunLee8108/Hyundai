import { motion } from "framer-motion";

function ShoppingTools(props) {
  return (
    <div>
      <motion.div 
  initial={{ x: "100%" }}
  animate={{ x: "calc(100vw - 50%)" }}
      whileHover="hover"
      transition={{delay:0.3}}
      >
        <h1>asdasd</h1>
      </motion.div>
    </div>
  );
}

export default ShoppingTools;
