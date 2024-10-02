import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import { ThemeContext } from "../../contexts/themeContext";
import { LogoutOutlined, MoonOutlined, SunOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import Auth from "../auth/Auth";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../thunks/authThunk";

const Header = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useContext(ThemeContext);
  const authUser = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <header className={`theme-${theme}`}>
      <nav>
        {location.pathname !== "/" && <NavLink to="/">Home</NavLink>}
        <NavLink to="todo">Todo</NavLink>
        <NavLink to="example">Example</NavLink>
        <NavLink to="counters">Counters</NavLink>
        <NavLink to="users">Users</NavLink>
      </nav>

      <Space size={"middle"}>
        <Button
          shape="circle"
          icon={theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
          onClick={toggleTheme}
        />
        {authUser.token ? (
          <Button
            shape="circle"
            icon={<LogoutOutlined />}
            type="primary"
            onClick={() => dispatch(logout())}
          />
        ) : (
          <Auth />
        )}
      </Space>
    </header>
  );
};

export default Header;
