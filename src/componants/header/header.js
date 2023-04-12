import { Link } from 'react-router-dom';
import "./header.css"
function Header(prop) {

    return (
        <div className="Headermain">

            <table className='border-solid border-2'>
                <tbody>
                <tr className='border-2'>
                    <Link to="/">
                        <td>
                            Home
                        </td>
                    </Link>
                </tr>
                <tr className='border-2'>
                    <Link to="/Prime">
                        <td>
                            Prime
                        </td>
                    </Link>
                </tr>
                <tr className='border-2'>
                    <Link to="/evenOdd">
                        <td>
                            EvenOdd
                        </td>
                    </Link>
                </tr>
                <tr className='border-2'>
                    <Link to="/PtoC">
                        <td>
                            Parent Child relation
                        </td>
                    </Link>
                </tr>
                <tr className='border-2'>
                    <Link to="/Weather">
                        <td>
                            Weather
                        </td>
                    </Link>
                </tr>
                </tbody>

            </table>

            {/* <li> <Link to="/Prime">Prime</Link></li>
                <li><Link to="/evenOdd">EvenOdd</Link></li> */}

        </div>
    )

}

export default Header