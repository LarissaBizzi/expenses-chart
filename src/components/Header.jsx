import logo from "/logo.svg"

export function Header() {
    return (
        <>
            <header className="header">
                <h1>My balance</h1>
                <p style={{ fontSize: '24px' }}>
                    $921.48
                </p>
                <img src={logo} alt="" />
            </header>
        </>
    )
}