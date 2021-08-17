export default function SettingsPage(){
    
    
    function setLight(){
        document.documentElement.style.setProperty('--text-color', 'black');
        document.documentElement.style.setProperty('--background-1', 'rgb(200, 255, 200)');
        document.documentElement.style.setProperty('--background-2', 'rgb(110, 250, 110)');
        document.documentElement.style.setProperty('--background-3', 'rgb(160, 250, 160)');
        document.documentElement.style.setProperty('--background-4', 'rgb(255, 255, 255)');
        document.documentElement.style.setProperty('--button-color:', 'rgb(30, 180, 30)');
        document.documentElement.style.setProperty('--button-hover-color', 'rgb(20, 120, 20)');
        document.documentElement.style.setProperty('--dis-button-color:', 'rgb(240, 20, 20)');
        document.documentElement.style.setProperty('--dis-button-hover-color', 'rgb(180, 30, 30)');
        document.documentElement.style.setProperty('--link-color:', 'black');
        document.documentElement.style.setProperty('--link-color-visited', 'rgb(0, 50, 0)');
    }

    function setDark(){
        document.documentElement.style.setProperty('--text-color', 'white');
        document.documentElement.style.setProperty('--background-1', 'rgb(20, 20, 30)');
        document.documentElement.style.setProperty('--background-2', 'rgb(30, 30, 40)');
        document.documentElement.style.setProperty('--background-3', 'rgb(40, 40, 50)');
        document.documentElement.style.setProperty('--background-4', 'rgb(80, 80, 100)');
        document.documentElement.style.setProperty('--button-color:', 'rgb(20, 120, 20)');
        document.documentElement.style.setProperty('--button-hover-color', 'rgb(30, 80, 30)');
        document.documentElement.style.setProperty('--dis-button-color:', 'rgb(180, 30, 30)');
        document.documentElement.style.setProperty('--dis-button-hover-color', 'rgb(120, 20, 20)');
        document.documentElement.style.setProperty('--link-color:', 'rgb(50, 250, 50)');
        document.documentElement.style.setProperty('--link-color-visited', 'rgb(150, 250, 50)');
    }

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
                    <button onClick={() => setLight()}>Light Theme</button>
                    <button onClick={() => setDark()}>Dark Theme</button>
                </div>
            </div>
        </div>
    )
}