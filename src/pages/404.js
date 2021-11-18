import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { useStateValue } from "../contextapi/StateProvider"
import Navbar from "../components/common/Navbar/navbar"
import Footer from "../components/common/Footer/footer"

const NotFoundPage = () => {
  const [{ lightMode }, dispatch] = useStateValue()

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme")
    if (
      !(
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) &&
      !localTheme
    ) {
      dispatch({
        type: "LIGHT_THEME",
      })
    } else if (localTheme) {
      if (localTheme !== "light") {
        dispatch({
          type: "DARK_THEME",
        })
      } else {
        dispatch({
          type: "LIGHT_THEME",
        })
      }
    }
  }, [dispatch])

  return (
    <div className={`outermost-index-div ${lightMode && "light"}`}>
      <Helmet htmlAttributes={{ lang: "en" }}>
        <meta name="theme-color" content={lightMode ? "#eceded" : "#151719"} />
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The Error Page of Aihab Umair's personal portfolio website."
        />
        <title>404 Not Found</title>
      </Helmet>
      <div className="smart-scroll">
        <Navbar />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <p style={{ fontWeight: "bold", fontSize: "10rem", color: "#5658dd" }}>
          404
        </p>
        <p>Not Found</p>
      </div>
      <Footer style={{ marginTop: "auto" }} />
    </div>
  )
}

export default NotFoundPage
