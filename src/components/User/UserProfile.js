import '../../styles/User.css';
import {BiUserCircle} from 'react-icons/bi';
const UserProfile = () => {
    return (
        <div className="userprofile-card">

            <div className='user-image'><BiUserCircle size={120} /></div>
            <span className='profile-name' > Amare Zeru </span>
            <span className="title">full-stck Developer</span>
            <span>wolkite University</span>
            <div>
                <a href="#"><i class="fa fa-dribbble"></i>1</a>
                <a href="#"><i class="fa fa-twitter"></i>2</a>
                <a href="#"><i class="fa fa-linkedin"></i>3</a>
                <a href="#"><i class="fa fa-facebook"></i>4</a>
            </div>


        </div>
    )
}
export default UserProfile;