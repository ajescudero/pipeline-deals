import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import { Bar } from "react-chartjs-2";
import PropTypes from "prop-types";
import { sortEntries, getLabels, getDeals } from "./helper";

const API = `${process.env.REACT_APP_API_URL}/deals.json?api_key=${process.env.REACT_APP_API_KEY}`;

function Home() {
  const [dataSet, setDataSet] = useState({});
  const [options, setOptions] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await axios.get(API);
        const entries = await sortEntries(result);

        let labels = getLabels(entries);

        let deals = getDeals(labels, entries);

        const chartState = {
          labels: labels,
          datasets: [
            {
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data: deals,
            },
          ],
        };

        const options = {
          title: {
            display: true,
            text: "Total $ value of deals per stage",
            fontSize: 20,
          },
          legend: {
            display: false,
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function (label) {
                    return (
                      "$" +
                      label.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    );
                  },
                  beginAtZero: true,
                  fontSize: 10,
                },
                gridLines: {
                  display: true,
                },
              },
            ],
          },
          tooltips: {
            mode: "label",
            label: "mylabel",
            callbacks: {
              label: function (tooltipItem) {
                return (
                  "$" +
                  tooltipItem.yLabel
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                );
              },
            },
          },
        };

        setDataSet(chartState);
        setOptions(options);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>{isLoading == false ? <Bar data={dataSet} options={options} /> : false}</>
  );
}

Home.propTypes = {
  dataSet: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default Home;
