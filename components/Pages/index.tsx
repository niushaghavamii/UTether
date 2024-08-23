import Component, { PageEl } from "@/components/Libs/Component";
import Copy from "@/components/Libs/Copy";
import Router from "next/router";
import Window from "@/components/Libs/Window";
import TextBox from "@/components/Libs/TextBox";
import Icon2Titles from "@/components/Libs/Icon2Titles";
import Icon3Titles from "@/components/Libs/Icon3Titles";
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

export default (p) => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {
  let styles = global.styles;



  return  (
    <div
      style={{
        direction: "rtl",
        minHeight: "100vh",
        backgroundImage: "url('/pic/tether2.jpg')",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center center",
        display: "flex",
        justifyContent: "center", 
        alignItems: "center",
        gap: "20px", 
      }}
    >
      {/* persian box*/}
      <Window
        title={
          <div
            style={{
              fontSize: "2em",
              padding: "100px",
              borderRadius: "10px",
              color: "#ff",
              textAlign: "center",
            }}
          >
            Tether(دلار)
          </div>
        }
        style={{
          minHeight: 500,
          width: "calc(50% - 40px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(7px)",
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div 
          style={{
            width: "80%",
            height: 100,
            backgroundColor: "#27363D",
            borderRadius: 40,
            textAlign: "center",
            fontSize: "1.5em",
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
            marginBottom: "20px",
          }}
        >
          <FontAwesomeIcon
            icon={faCommentsDollar}
            style={{
              position: "absolute",
              left: 20,
              fontSize: "2em",
            }}
          />
          <span style={{ marginLeft: "60px" }}>
            قیمت اکنون : {(props.p.price as number).toLocaleString("fa-IR")}
          </span>
        </div>

        <div
          style={{
            width: "80%",
            height: 100,
            backgroundColor: "rgb(27 29 28)",
            borderRadius: 40,
            textAlign: "center",
            fontSize: "1.5em",
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
            marginBottom: "20px",
          }}
        >
          <FontAwesomeIcon
            icon={faClock}
            style={{
              position: "absolute",
              left: 20,
              fontSize: "2em",
            }}
          />
          <span style={{ marginLeft: "60px" }}>
            تغییرات ۲۴ ساعت :
            <br-x/>
            %{" "}
            {(Number(props.p.diff24d) as number).toLocaleString("fa-IR")}
          </span>
        </div>

        <div
          style={{
            width: "80%",
            height: 100,
            backgroundColor: "#27363D",
            borderRadius: 40,
            textAlign: "center",
            fontSize: "1.5em",
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
            marginBottom: "20px",
          }}
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            style={{
              position: "absolute",
              left: 20,
              fontSize: "2em",
            }}
          />
          تغییرات هفتگی :
          <br />
          %{" "}
          {(Number(props.p.diff7d) as number).toLocaleString("fa-IR")}
        </div>

        <div
          style={{
            width: "80%",
            height: 100,
            backgroundColor: "rgb(13 128 59)",
            borderRadius: 40,
            textAlign: "center",
            fontSize: "1.5em",
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
          }}
        >
          <FontAwesomeIcon
            icon={faCalendar}
            style={{
              position: "absolute",
              left: 10,
              fontSize: "2em",
            }}
          />
          تغییرات ماهانه :   
          <br/>
          %{" "}
          {(Number(props.p.diff30d) as number).toLocaleString("fa-IR")}
        </div>
      </Window>

      {/* english box*/}
      <Window
        title={
          <div
            style={{
              fontSize: "2em",
              padding: "100px",
              borderRadius: "10px",
              color: "#ff",
              textAlign: "center",
            }}
          >
            Tether(USD)
          </div>
        }
        style={{
          minHeight: 500,
          width: "calc(50% - 40px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          backdropFilter: "blur(7px)",
          borderRadius: "15px",
          border: "1px solid rgba(255, 255, 255, 0.5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div 
          style={{
            width: "80%",
            height: 100,
            backgroundColor: "#27363D",
            borderRadius: 40,
            textAlign: "center",
            fontSize: "1.5em",
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
            marginBottom: "20px",
          }}
        >
          <FontAwesomeIcon
            icon={faCommentsDollar}
            style={{
              position: "absolute",
              left: 20,
              fontSize: "2em",
            }}
          />
          <span style={{ marginLeft: "60px" }}>
            Current Price : {(props.p.price as number).toLocaleString("en-US")}
          </span>
        </div>

        <div
          style={{
            width: "80%",
            height: 100,
            backgroundColor: "rgb(27 29 28)",
            borderRadius: 40,
            textAlign: "center",
            fontSize: "1.5em",
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
            marginBottom: "20px",
          }}
        >
          <FontAwesomeIcon
            icon={faClock}
            style={{
              position: "absolute",
              left: 20,
              fontSize: "2em",
            }}
          />
          <span style={{ marginLeft: "60px" }}>
           : 24h Change
            <br-x/>
            %{" "}
            {(Number(props.p.diff24d) as number).toLocaleString("en-US")}
          </span>
        </div>

        <div
          style={{
            width: "80%",
            height: 100,
            backgroundColor: "#27363D",
            borderRadius: 40,
            textAlign: "center",
            fontSize: "1.5em",
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
            marginBottom: "20px",
          }}
        >
          <FontAwesomeIcon
            icon={faCalendarDays}
            style={{
              position: "absolute",
              left: 20,
              fontSize: "2em",
            }}
          />
           : Weekly Change
          <br />
          %{" "}
          {(Number(props.p.diff7d) as number).toLocaleString("en-US")}
        </div>

        <div
          style={{
            width: "80%",
            height: 100,
            backgroundColor: "rgb(13 128 59)",
            borderRadius: 40,
            textAlign: "center",
            fontSize: "1.5em",
            color: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "0 20px",
          }}
        >
          <FontAwesomeIcon
            icon={faCalendar}
            style={{
              position: "absolute",
              left: 10,
              fontSize: "2em",
            }}
          />
           : Monthly Change
          <br/>
          %{" "}
          {(Number(props.p.diff30d) as number).toLocaleString("en-US")}
        </div>
      </Window>

           {/* lego*/}
           <img
        src= "/pic/logo2.png"
        alt="Logo"
        style={{
          position: "absolute",
          bottom: "30px", 
          left: "30px", 
          width: "200px", 
          height: "auto",
        }}
      />
    
    </div>
  );
};


export async function getServerSideProps(context) {
  var session = await global.SSRVerify(context);
  var {
    uid,
    name,
    image,
    imageprop,
    lang,
    cchar,
    unit,
    workspace,
    servid,
    servsecret,
    usedquota,
    quota,
    quotaunit,
    status,
    regdate,
    expid,
    role,
    path,
    devmod,
    userip,
  } = session;

  let res = await fetch("https://api.tetherland.com/currencies");
  let data = await res.json();
  let p = data.data.currencies.USDT;

  console.log("priceeeeeee", p);

  return {
    props: {
      data: global.QSON.stringify({
        p,
        session,
        // nlangs,
      }),
    },
  };
}
