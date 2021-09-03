import { getListWinner } from "app/admin/services/landingPage";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "./ListWinner.scss";
function ListWinner(props) {
  const [listWinner, setListWinner] = useState([]);
  useEffect(() => {
    fetchDataListWinner();
  }, []);

  const fetchDataListWinner = async () => {
    try {
      const { data } = await getListWinner();
      if (data) {
        setListWinner(data.result);
      }
    } catch (error) {
      setListWinner([]);
    }
  };

  const convertNumberPhone = (number) => {
    if (number) {
      const arr = number.split("");
      arr[arr.length - 5] = "*";
      arr[arr.length - 6] = "*";
      arr[arr.length - 7] = "*";
      return arr.join("");
    }
  };
  return (
    <div className="list-winner">
      <div className="list-winner-title">
        <div>DANH SÁCH TRÚNG THƯỞNG</div>
      </div>

      <div className="list-winner-header">
        <div className="list-winner-header-item">Thời gian</div>
        <div className="list-winner-header-item reward">Phần thưởng</div>
        <div className="list-winner-header-item">Số điện thoại</div>
      </div>
      <div className="list-winner-body">
        {listWinner.length > 0
          ? listWinner.map((winner, index) => {
              return (
                <div key={(winner._id, index)} className="list-winner-body-row">
                  <div
                    // style={{ background: "#88909A" }}
                    className="list-winner-body-row-item"
                  >
                    {moment(winner.created_at).format("DD-MM-YYYY")}
                  </div>
                  <div
                    // style={{ background: "#8F969F" }}
                    className="list-winner-body-row-item reward"
                  >
                    {winner.reward_name}
                  </div>
                  <div
                    // style={{ background: "#9BA3AE" }}
                    className="list-winner-body-row-item"
                  >
                    {convertNumberPhone(winner.phone_number)}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}

export default ListWinner;
