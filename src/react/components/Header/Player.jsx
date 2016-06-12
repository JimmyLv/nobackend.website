import {
  Component,
  PropTypes,
} from 'react'

import sample from 'lodash/sample'
import without from 'lodash/without'

import './Player.less'
import ReactPlayer from 'react-player'
import Duration from './Duration'

class Player extends Component {
  constructor() {
    super()
    this.state = {
      url: null,
      playing: true,
      volume: 0.8,
      played: 0,
      loaded: 0,
      duration: 0,
      showName: false,
      songs: [
        {
          "name": "空白格",
          "url": "http://p2.music.126.net/KReV3o3WB8L4VJR6mvl-5g==/2153943278813262.mp3",
          "lrc_url": "",
          "artists": "杨宗纬",
          "provider": "http://music.163.com/"
        }, {
          "name": "Inspire",
          "url": "http://p2.music.126.net/IB4CbLNNO5U1GAIPI0u32Q==/1983518976521409.mp3",
          "lrc_url": "",
          "artists": "Capo Productions",
          "provider": "http://music.163.com/"
        }, {
          "name": "刚刚好",
          "url": "http://p2.music.126.net/b1ywwf7QMIK52M_Fqpqb_w==/3420580685966691.mp3",
          "lrc_url": "",
          "artists": "薛之谦",
          "provider": "http://music.163.com/"
        }, {
          "name": "Feeling U",
          "url": "http://p2.music.126.net/zKr4hskGeZfxQbjbN15sdw==/7871403743831481.mp3",
          "lrc_url": "",
          "artists": "m80",
          "provider": "http://music.163.com/"
        }, {
          "name": "红色高跟鞋",
          "url": "http://p2.music.126.net/v4y5xLN-XkONDxbonZPLDw==/7990151000576838.mp3",
          "lrc_url": "",
          "artists": "蔡健雅",
          "provider": "http://music.163.com/"
        }, {
          "name": "You",
          "url": "http://p2.music.126.net/aVueNWYsxQzPGsEIemX-ZQ==/2075877953258328.mp3",
          "lrc_url": "",
          "artists": "Approaching Nirvana",
          "provider": "http://music.163.com/"
        }, {
          "name": "我知道你都知道",
          "url": "http://p2.music.126.net/TqpSkuvT7KBPtPGsQfUvhA==/5640494650578318.mp3",
          "lrc_url": "",
          "artists": "薛之谦",
          "provider": "http://music.163.com/"
        }, {
          "name": "Stepping Stones",
          "url": "http://p2.music.126.net/L0N27SjALVAFj9X6z8q8JA==/5937362790262727.mp3",
          "lrc_url": "",
          "artists": "Dave Thomas Junior",
          "provider": "http://music.163.com/"
        }, {
          "name": "He's a Pirate (Pirates of the Caribbean theme)",
          "url": "http://p2.music.126.net/r1q3FXvqHl6obVW4T-fUaA==/1984618488147502.mp3",
          "lrc_url": "",
          "artists": "David Garrett",
          "provider": "http://music.163.com/"
        }, {
          "name": "小城大事",
          "url": "http://p2.music.126.net/s84giYHIqifbRB8WZkNnzQ==/6670737045789525.mp3",
          "lrc_url": "",
          "artists": "杨千嬅",
          "provider": "http://music.163.com/"
        }]
    }
  }

  componentWillMount() {
    this.shuffle()
  }

  toggleName() {
    this.setState({ showName: !this.state.showName })
  }

  load(url) {
    this.setState({
      url,
      played: 0,
      loaded: 0
    })
  }

  shuffle() {
    const selectedMusic = sample(without(this.state.songs, this.state.selectedMusic));
    this.setState({
      selectedMusic,
      url: selectedMusic.url,
      playing: true,
      played: 0,
      loaded: 0
    })
  }

  togglePlaying() {
    this.setState({ playing: !this.state.playing })
  }

  toggleMuting() {
    this.setState({ volume: this.state.volume > 0.5 ? 0 : 1 })
  }

  stop() {
    this.setState({ url: null, playing: false })
  }

  setVolume(e) {
    this.setState({ volume: parseFloat(e.target.value) })
  }

  onSeekMouseDown(e) {
    this.setState({ seeking: true })
  }

  onSeekChange(e) {
    this.setState({ played: parseFloat(e.target.value) })
  }

  onSeekMouseUp(e) {
    this.setState({ seeking: false })
    this.refs.player.seekTo(parseFloat(e.target.value))
  }

  onProgress(state) {
    // We only want to update time slider if we are not currently seeking
    if (!this.state.seeking) {
      this.setState(state)
    }
  }

  render() {
    const {
      url, playing, volume,
      played, loaded, duration,
      showName, selectedMusic
    } = this.state

    const selectedMusicName = `${selectedMusic.name} - ${selectedMusic.artists}`

    return (
      <div className="music-player m-player link">
        <ReactPlayer
          ref='player'
          className='react-player'
          width={0}
          height={0}
          url={url}
          playing={playing}
          volume={volume}
          onStart={() => console.log('onStart')}
          onPlay={() => this.setState({ playing: true })}
          onPause={() => this.setState({ playing: false })}
          onBuffer={() => console.log('onBuffer')}
          onEnded={() => this.shuffle.bind(this)}
          onError={e => console.log('onError', e)}
          onProgress={this.onProgress.bind(this)}
          onDuration={duration => this.setState({ duration })}
        />
        <a href={`http://music.163.com/#/search/m/?s=${selectedMusicName}`} target="_blank">
          <i className={playing ? 'faa-float animated fa fa-lg fa-music': 'fa fa-lg fa-music'}/>
        </a>
        <a onClick={this.togglePlaying.bind(this)}>
          <i className={!playing ? 'fa fa-play' : 'fa fa-pause'}/>
        </a>
        <a onClick={this.shuffle.bind(this)}>
          <i className="fa fa-random"/>
        </a>
        <a onClick={this.toggleMuting.bind(this)}>
          <i className={volume == 0 ? 'fa fa-volume-off' : 'fa fa-volume-up' }/>
        </a>
        <a onClick={this.toggleName.bind(this)}>
          <Duration seconds={duration * (1 - played)}/>
          <span className="music-name m-hide fx-fade-normal fx-dur-600 fx-ease-none">
            {showName ? selectedMusicName : ''}
          </span>
        </a>
      </div>
    )
  }
}

Player.propTypes = {}
Player.defaultProps = {}

export default Player