import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_PRODUCTS, GET_PRODUCT_DETAIL } from "./api";
import { connect } from "react-redux";
import "./styles/index.css";

import {
  fetchSuccess,
  fetchFail,
  fetchDetailSuccess,
  fetchDetailFail,
} from "./stores/actions";

// component
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Table from "./components/Table";
import ClipLoader from "react-spinners/ClipLoader";
import Modal from "./components/Modal";

function App(props) {
  const {
    fetchSuccess,
    fetchFail,
    products = [],
    detail = [],
    fetchDetailSuccess,
    fetchDetailFail,
  } = props;

  const [showModal, setShowModal] = useState(false);
  const [loadingModal, setLoadingModal] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [sku, setSku] = useState("");
  const { loading, refetch } = useQuery(GET_PRODUCTS, {
    variables: { search: keyword },
    onCompleted: (res) => {
      fetchSuccess(res);
    },
    onError: (e) => {
      fetchFail(e);
      throw e;
    },
  });

  const { refetchDetail = refetch } = useQuery(
    GET_PRODUCT_DETAIL,
    {
      variables: { eq: sku },
      onCompleted: (res) => {
        fetchDetailSuccess(res);
        setLoadingModal(false)
      },
      onError: (e) => {
        fetchDetailFail(e);
        throw e;
      },
    }
  );

  const onViewDetails = async (sku) => {
    setLoadingModal(true)
    setSku(sku);
    setTimeout(() => {
      refetchDetail();
    }, 500);
    setShowModal(true);
  };

  return (
    <div>
      <Header keyword={keyword} onChange={(v) => setKeyword(v.target.value)} />
      <Sidebar />
      <div className="text-gray-700 h-full w-full mr-10">
        {showModal && (
          <Modal
            toggleModal={() => setShowModal(false)}
            isLoading={loadingModal}
            details={detail}
          />
        )}
        <div className="ml-32 pt-24 mr-10">
          <div className="mt-5 pb-5">
            <input
              title="Search Bar"
              aria-label="search bar"
              role="search"
              className="pr-8 pl-4 py-2 rounded-md cursor-pointer border-black w-64 placeholder-gray-500 ml-5"
              type="text"
              placeholder="Type your product..."
              value={keyword}
              onChange={(v) => setKeyword(v.target.value)}
            />
            <button
              className="bg-gray-900 pr-4 pl-4 py-2 rounded-md cursor-pointer border-black w-30 ml-5 text-white"
              onClick={() => refetch()}
            >
              Search
            </button>
          </div>
          {loading ? (
            <ClipLoader
              color={"black"}
              loading={loading}
              css={{ display: "block", margin: "0 auto", borderWidth: 3 }}
              size={150}
            />
          ) : (
            <Table data={products} viewDetail={onViewDetails} />
          )}
        </div>
      </div>
    </div>
  );
}

const stateProps = (state) => {
  return {
    products: state.productsState.data,
    detail: state.productsState.detail,
  };
};
const dispatchProps = {
  fetchSuccess,
  fetchFail,
  fetchDetailSuccess,
  fetchDetailFail,
};
export default connect(stateProps, dispatchProps)(App);
