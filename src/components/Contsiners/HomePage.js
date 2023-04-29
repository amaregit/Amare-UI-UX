import '../../styles/HomePage.css';
import UserProfile from '../User/UserProfile';
const HomePage = () => {
    return (
        <div class="wave">
            <UserProfile/>
            <h3>
                Netlify makes it simple to configure redirects and
                rewrite rules for your URLs. All you need to do
                is create a file called _redirects(without any
                extensions) in the app’s public folder.
            </h3>
            <pre>

            </pre>
        </div>
    )
}
export default HomePage;
