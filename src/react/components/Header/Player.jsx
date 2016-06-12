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
  constructor(props) {
    super(props)
    this.state = {
      selectedMusic: null,
      showName: false,
      playing: true,
      volume: 0.8,
      played: 0,
      loaded: 0,
      duration: 0
    }
  }

  componentWillMount() {
    this.shuffle()
  }

  toggleName() {
    this.setState({ showName: !this.state.showName })
  }

  shuffle() {
    const selectedMusic = sample(without(this.props.songs, this.state.selectedMusic));
    this.setState({
      selectedMusic,
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
    this.setState({ selectedMusic: null, playing: false })
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
      playing, volume,
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
          url={selectedMusic.url}
          playing={playing}
          volume={volume}
          onStart={() => console.log('onStart')}
          onPlay={() => this.setState({ playing: true })}
          onPause={() => this.setState({ playing: false })}
          onBuffer={() => console.log('onBuffer')}
          onEnded={this.shuffle.bind(this)}
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

Player.propTypes = {
  songs: PropTypes.array.isRequired
}
Player.defaultProps = {}

export default Player