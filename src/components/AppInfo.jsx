import packageInfo from "../../package.json"
import "../styles/appinfo.css"
import GithubIcon from "./icons/GithubIcon"

export default function AppInfo({ darkMode }) {

  return (
    <div className="appinfo">
      <span className="appname">{packageInfo.name} @ {packageInfo.version}</span>
      <div>
        <a href="https://github.com/voiceinthedark">
          <span className="appauthor">{packageInfo.author}</span>
          <GithubIcon fill={darkMode ? 'white' : 'black'} />
        </a>
      </div>
    </div>

  )
}
