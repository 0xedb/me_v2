import { page } from './page.scss'; 
import '@atlaskit/css-reset'

function Page({ children }: Props) {
    return (
        <div id={page}>
            {children}
        </div>
    );
}

export default Page;
