import { Component } from "react";
import "./App.css";
import AppView from "./views/app/app.view";
import LoginView from "./views/auth/login.view";
import { ToastContainer } from "react-toastify";

class App extends Component {
  state = {
    loading: true,
    accessToken: undefined,
  };

  componentDidMount() {
    const accessToken = localStorage.getItem("accessToken");
    this.setState({ accessToken });
  }

  render() {
    const { accessToken } = this.state;
    return (
      <>
        <ToastContainer
          position="top-right"
          autoClose={1500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {!accessToken ? <LoginView /> : <AppView />};
      </>
    );
  }
}

export default App;
