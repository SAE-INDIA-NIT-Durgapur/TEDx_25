import React from "react";
import Navbar from "../Navbar/Navbar";
import PriceTable from "./components/PriceTable";
import { Products } from "./components/product";
import SizeChart from "./components/SizeChart";
import { contents } from "./contents";
import "./Merch.css";

const Merchandise = () => {
  return (
    <>
      <Navbar />
      <div className="Items">
        <div class="text-container">
          <svg viewBox="0 0 960 300">
            <symbol id="s-text">
              <text text-anchor="middle" x="50%" y="50%">
                Merchandise
              </text>
            </symbol>

            <g class="g-ants">
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
            </g>
          </svg>
        </div>
      </div>

      <div className="page-contain">
        {/* <div className="inner-text">
          <p>
            An exclusive range of TEDxNITD high-quality merchandise to inspire
            and remind you of the event.
          </p>
          <p>
            Available to order online for delivery directly to you or to the
            collection at the event if you are attending on Date. Items are in
            limited stock and are available subject to the availability
          </p>
        </div> */}

        <div className="Card">
          {contents.map((contents) => (
            <Products key={contents.id} image={contents.image} />
          ))}
        </div>

        <div className="wrap">
          <button class="button">BUY NOW!</button>
        </div>

        <SizeChart />
        <PriceTable />
      </div>
    </>
  );
};

export default Merchandise;
