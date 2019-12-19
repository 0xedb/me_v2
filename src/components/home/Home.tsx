import Page from '../page/Page'
import HeadMeta from '../meta/HeadMeta'
import NavBar from '../nav/NavBar'

function Home() {
    return (
        <>
            <HeadMeta>
                <title>theBashShell::Bruno Edoh</title>
            </HeadMeta>
            <Page >
                <NavBar />
            </Page>
        </>
    );
}

export default Home;
