import React,{Component} from "react";
class Employee extends Component{
    constructor(){
        super();
        this.state = {
            userData: [
                { id: '1', name: 'Joe', user_type: 'Developer', age:31, years:11 },
                { id: '2', name: 'Hill', user_type: 'Designer', age:26, years:4 },
                { id: '3', name: 'John', user_type: 'Teacher', age:24, years: 2},
                { id: '4', name: 'Sam', user_type: 'Entreprenuer', age:58,years:25},
                { id: '5', name: 'Jack', user_type: 'Designer', age:43, years: 18}
            ]
        }
    }
    renderItems = () => {
        const data = this.state.userData;
        const mapRows = data.map((item) => (
            <React.Fragment key={item.id}>
                <li className="list-elements">
                    <span>Id: {item.id}</span>
                    <span>Name : {item.name  + " "}</span>
                    <span>User Type: {item.user_type}</span>
               </li>
            </React.Fragment>
        ));
        return mapRows;
    };
    renderFliteredItems = () =>{
        const data =this.state.userData;
        const filteredDataOnName = data.filter(item => item.user_type == "Designer");
        const mapRows2 = filteredDataOnName.map((item) => (
            <li key={item.id}>
                <span>Id: {item.id}</span>
                <span>Name: {item.name  + " "}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        ));

        return mapRows2;
    }
    renderFliteredItems2 = () =>{
        const data =this.state.userData;
        const filteredDataOnUsertype = data.filter(item => item.name[0] == "J");
        const mapRows2 = filteredDataOnUsertype.map((item) => (
            <li key={item.id}>
                <span>Id: {item.id} </span>
                <span>Name: {item.name + " "}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        ));

        return mapRows2;
    }
    renderFiltereditem3 = ()=>{
        const data = this.state.userData
        const filterDataOnAge = data.filter(item => item.age>28 && item.age<50)
        const mapRow3 = filterDataOnAge.map((item)=>(
            <li key={item.id}>
                <span>Id:</span>
                <span>Name: {item.name + " "}</span>
                <span>User Type: {item.user_type}</span>
            </li>
        ));
        return mapRow3
    }
    renderReduceditem = () => {
        const data = this.state.userData;
        const filteredData = data.filter(item => item.user_type === "Designer");
        const reducedData = filteredData.reduce((acc, current) => acc + current.age, 0);
        const mapRow4 = filteredData.map((item) => (
            <h3 key={item.id}>
            </h3>
        ));
        mapRow4.push(
            <div key="summary">
                <span> {reducedData}</span>
            </div>
        );
        return mapRow4;
    }
    
    render(){
       return(
        <React.Fragment>
            <h1>Display all items</h1>
            <div className="item-box">
                <ul>{this.renderItems()}</ul>
            </div>
            <h1>Display based on user type</h1>
            <div className="item-box">
                <ul>{this.renderFliteredItems()}</ul>
            </div>
            <h1>Filter all data starting with J</h1>
            <div className="item-box">
                <ul>{this.renderFliteredItems2()}</ul>
            </div>
            <h1>Filter all data based on age greater than 28 and age less than equal to 50</h1>
            <div className="item-box">
                <ul>{this.renderFiltereditem3()}</ul>
            </div>
            <h1>Find the total years of the designers </h1>
            <div className="item-box">
                <ul>{this.renderReduceditem()}</ul>
            </div>
        </React.Fragment>
       )
    }
}
export default Employee