import { tab } from "@testing-library/user-event/dist/tab";
const { Component } =require ("react");
class Table extends Component{
    render(){
        return(
            <table>
                <thead>
                    <tr>
                        <th>Sl No</th>
                        <th>Name</th>
                        <th>Job Role</th>
                        <th>Company Name</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>11</td>
                        <td>Rahul</td>
                        <td>Full Stack web Developer</td>
                        <td>HCL</td>
                        <td>65000</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Rabee</td>
                        <td>Full Stack Java Developer</td>
                        <td>TCS</td>
                        <td>55000</td>
                    </tr>
                    <tr>
                        <td>13</td>
                        <td>Prakash</td>
                        <td>Full Stack Python Developer</td>
                        <td>INFOSYS </td>
                        <td>50000</td>
                    </tr>
                    <tr>
                        <td>14</td>
                        <td>Edison</td>
                        <td>Front End Developer</td>
                        <td>INFOTECH</td>
                        <td>65000</td>
                    </tr>
                    <tr>
                        <td>15</td>
                        <td>Vicky</td>
                        <td>Full Stack web Developer</td>
                        <td>ZOHO</td>
                        <td>45000</td>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>Magesh</td>
                        <td>Java Developer</td>
                        <td>Wipro</td>
                        <td>55000</td>
                    </tr>
                     </tbody>
            </table>

        )
    }
}
export default Table;