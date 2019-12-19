import { page } from './page.scss';
import NavBar from '../nav/NavBar';
import '@atlaskit/css-reset'

function Page({ children, withNav }: PageProps) {
    return (
        <div id={page}>
            {withNav ? <NavBar /> : null}
            <div>
                <span>adsf</span>
                {children}
            </div>
        </div>
    );
}

export default Page;
