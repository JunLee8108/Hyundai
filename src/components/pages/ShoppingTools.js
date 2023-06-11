import { motion } from "framer-motion";

function ShoppingTools(props) {
  return (
    <div>
      <motion.div 
  initial={{ x: "100%" }}
  animate={{ x: "45%" }}
      transition={{delay:0.3}}
      >
        <h1 style={{margin: "0px"}}>asdasd</h1>
      </motion.div>
    </div>
  );
}

export default ShoppingTools;
