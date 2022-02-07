import "./styles.css";
import { motion, AnimateSharedLayout, AnimatePresence } from "framer-motion";
import React from "react";
import Items from "./Item";

export default function App() {
  const [isOpen, setIsOpen] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsOpen(false)
    }, 2000)
  }, [isOpen])
  return (
    <div className="App">
      <AnimateSharedLayout>
        <AnimatePresence>
          {isOpen && (
            <div className="loading">
              <div className="loading-item">
                <motion.h3 layoutId="logo" onClick={() => setIsOpen(!isOpen)}>
                  Level Up Tutorials
                </motion.h3>
              </div>
              <motion.div exit={{ opacity: 0 }}>
                {/* <div className="loading-item">
                  <p>Is loading...</p>
                </div> */}
                <motion.div layoutId="header" className="loading-item">
                  <motion.div
                    style={{
                      backgroundColor: "#00FFFF",
                      height: 6,
                      width: 100
                    }}
                    animate={{ x: 100, y: -5 }}
                    initial={{ x: -100, y: -5 }}
                    transition={{ flip: Infinity, duration: 1.2 }}
                  />
                  <motion.div
                    style={{ backgroundColor: "#ED2939", height: 8, width: 20 }}
                    animate={{ x: 190, y: -10 }}
                    initial={{ x: -100, y: -10 }}
                    transition={{ flip: Infinity, duration: 1.2 }}
                  />
                  <motion.div
                    style={{
                      backgroundColor: "#FFFF00",
                      height: 4,
                      width: 200
                    }}
                    animate={{ x: 100, y: -5 }}
                    initial={{ x: -100, y: -5 }}
                    transition={{ flip: Infinity, duration: 1.5 }}
                  />
                </motion.div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
        <motion.header layoutId="header" className="App-header">
          <div className="App-header-wrapper">
            <nav className="nav">
              <div className="nav-wrapper">
                <div className="nav-burger">
                  <motion.span
                    layoutId="logo"
                    onClick={() => setIsOpen(!isOpen)}
                    className="nav-burger-text"
                  >
                    Level Up Tutorials
                  </motion.span>
                </div>
                <div className="nav-menu">
                  <Items />
                </div>
              </div>
            </nav>
          </div>
        </motion.header>
        <main className="App-main--content">
          <div className="motion-animation">
            <h1>Animation</h1>
            <p>
              The animate prop can accept an object of values. When one of them
              changes, the motion component will automatically animate to the
              new state. The animation used can be configured using the
              transition prop.
            </p>
          </div>
          <div className="motion-animation">
            <h1>CSS variables</h1>
            <p>
              Motion can animate the value of CSS variables, and also read CSS
              variables as animation targets. #Using pre-defined CSS variables
              in animation HTML motion components can animate to and from CSS
              variables, as long as that variable is defined on a component
              ancestor.
            </p>
          </div>
        </main>
        <footer className="App-footer"></footer>
      </AnimateSharedLayout>
    </div>
  );
}
