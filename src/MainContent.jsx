import React, { Component } from "react";
const digitList = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
class MainContent extends Component {
  data = {
    firstLine: "হাও মাও খাও",
    SecondLine: "মানুষের গন্ধ পাও",
    emoji: "0x1F608",
  };
  clickCount = "০";
  demoTableData = [
    { id: 1, name: "abc", phone: "123" },
    { id: 2, name: "xyz", phone: "345" },
    { id: 3, name: "jkl", phone: "567" },
    { id: 4, name: "qwr", phone: "785" },
  ];
  render() {
    var element = (
      <React.Fragment>
        <h1 className="border-bottom m-1 p-4">{this.data.firstLine}</h1>
        <div className="highlight p-3">
          <p>
            {this.data.SecondLine}
            {String.fromCodePoint(this.data.emoji)}
          </p>
          <button
            type="button"
            className="btn btn-primary btnClickCount"
            onClick={this.onCountClick}
          >
            Click Count
          </button>
        </div>
        <div className="text-center">
          <span style={{ color: "red", textAlign: "center", fontSize: "5rem" }}>
            {this.clickCount}
          </span>
        </div>
        <table className="table m-1">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.demoTableData.map((item) => {
              return (
                <tr key ={item.id}>
                  <th scope="row">{item.id}</th>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </React.Fragment>
    );
    return element;
  }
  onCountClick = () => {
    let number = "";
    let count = this.clickCount;
    count.split("").forEach((item) => {
      number = number + digitList.indexOf(item);
    });
    number = Number(number);
    number = number + 1;
    let digits = number
      .toString()
      .split("")
      .map((iNum) => digitList[parseInt(iNum, 10)]);
    let banglaNum = digits.reduce((banNum, item) => banNum + item, "");
    this.setState({}, () => {
      this.clickCount = banglaNum;
    });
    /* this.setState(() => ({
      this.clickCount = banglaNum;
    })); */
  };
}

export default MainContent;
