import { CSSTransition } from "react-transition-group";

function Fade({ children, ...props }) {
  return (
    <CSSTransition {...props} timeout={1000} classNames="fade" exit={false}>
      {children}
    </CSSTransition>
  );
}

export default Fade;
