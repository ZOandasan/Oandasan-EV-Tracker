export default function SettingsPage(){
    return (
        <div className="settings">
            <h1 className="head">Settings</h1>
            <div>
                <h3>Text Size</h3>
                <hr />
                <div>
                    <button>10px</button>
                    <button>12px</button>
                    <button>14px</button>
                    <button>16px</button>
                    <button>24px</button>
                    <p>"Sample Text"</p>
                </div>
            </div>
            <div>
                <hr />
                <h3>Color Settings</h3>
                <hr />
                <div>
                    <button>Light Theme</button>
                    <button>Dark Theme</button>
                </div>
            </div>
        </div>
    )
}