
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


const listSongs = $('.container__playlist-song-list')
const listSong1 = $('.menu__right-list-songs')
const listSong2 = $('.container__playlist .container__playlist-song-list-2')
const audio = $('#audio')
const playing = $('.music-handle-btn--play-pause')
const prevSong = $('.music-handle-btn--prev')
const nextSong = $('.music-handle-btn--next')
const loopSong = $('.music-handle-btn--loop')
const randomSong = $('.music-handle-btn--random')
const progress = $('#progress')
const tracktime = $('.tracktime')
const durationtime = $('.durationtime')
const progressVolume = $('#progress__volume')
const volumeActive = $('.volume-active')
const volumeMute = $('.volume-mute')
const progressTrackUpdate = $('.progress__track-update')
const inputSearch = $('.container__header-search-info')
const settingBtn = $('.container__header-list-setting')
const menuRightMore = $('.menu__right-more')
const menuRight = $('.menu__right')
const container = $('.container')
const menuFooterMore = $('.menu__tablet .menu__footer')
const menuFooterLess = $('.menu__footer-tablet')
const menuMobile = $('.menu__mobile')


const app = {
    currentIndex: 0,
    isLoop: false,
    isRandom: false,
    isMore: false,
    isMenuMobile: false,
    songs: [
        { 
            name: 'How Can I Love The Heartbreak, You’re The One I Love',
            singer: 'AKMU',
            path: './assets/music/song1.mp3',
            image: './assets/img/img-music/song1.PNG'
        },
        { 
            name: 'If There Was Practice In Love',
            singer: 'Lim Jae Hyun',
            path: './assets/music/song2.mp3',
            image: './assets/img/img-music/song2.PNG'
        },
        { 
            name: 'Drunk On Love',
            singer: 'Jang Hye Jin, Yoon Min Soo',
            path: './assets/music/song3.mp3',
            image: './assets/img/img-music/song3.PNG'
        },
        { 
            name: 'Your Regards',
            singer: 'Song Haye',
            path: './assets/music/song4.mp3',
            image: './assets/img/img-music/song4.PNG'
        },
        { 
            name: 'Falling Leaves Are Beautiful',
            singer: 'Heize',
            path: './assets/music/song5.mp3',
            image: './assets/img/img-music/song5.PNG'
        },
        { 
            name: 'To You My Light',
            singer: 'Maktub, Lee Raon',
            path: './assets/music/song6.mp3',
            image: './assets/img/img-music/song6.PNG'
        },
        { 
            name: 'Fame',
            singer: 'MC Mong, Ga In, Chancellor',
            path: './assets/music/song7.mp3',
            image: './assets/img/img-music/song7.PNG'
        },
        { 
            name: 'So Long',
            singer: 'Paul Kim',
            path: './assets/music/song8.mp3',
            image: './assets/img/img-music/song8.PNG'
        },
        { 
            name: 'Love Poem',
            singer: 'IU',
            path: './assets/music/song9.mp3',
            image: './assets/img/img-music/song9.PNG'
        },
        { 
            name: 'Chanel',
            singer: 'MC Mong, Park Bom',
            path: './assets/music/song10.mp3',
            image: './assets/img/img-music/song10.PNG'
        }
    ],

    render: function () {
        const htmls = this.songs.map((song, index) => {
            return `
            <li class="row container__playlist-song-item ${index === this.currentIndex ? 'active' : ''}" data-index='${index}'>
            <div class="col c-6 container__playlist-song-item-left">
                <div class="container__playlist-song-item-img">
                    <img src="${song.image}" alt="" >
                </div>
                <div class="container__playlist-song-item-info">
                    <span class="container__playlist-song-item-name">${song.name}</span>
                    <span class="container__playlist-song-item-singer">${song.singer}</span>
                </div>
            </div>
            <div class="col c-4 container__playlist-song-item-center">
                <span class="container__playlist-song-item-center-name">${song.name} (Single)</span>
            </div>
            <div class="col c-2 container__playlist-song-item-right">
                <i class="ti-microphone container__playlist-song-icon-mic"></i>
                <i class="ti-heart container__playlist-song-icon-heart active"></i>
                <div class="container__playlist-song-item-right-time">
                    <span>4:47</span>
                    <i class="ti-more-alt container__playlist-song-icon-more"></i>
                </div>
            </div>
        </li>
            `
        }).join('')
        listSongs.innerHTML = htmls

        const htmls1 = this.songs.map((song, index) => {
            return `
            <li class="menu__right-list-song ${index === this.currentIndex ? 'active' : ''}" data-index='${index}'>
            <div class="menu__right-list-song-item">
                <div class="menu__right-list-song-item-img">
                    <img src="${song.image}" alt="">
                </div>
                <div class="menu__right-list-song-item-info">
                    <p class="menu__right-list-song-item-name">${song.name}</p>
                    <span class="menu__right-list-song-item-singer">${song.singer}</span>
                </div>
            </div>
            <div class="menu__right-list-song-icon">
                <i class="music-playing-btn-heart ti-heart active"></i>
                <i class="music-playing-btn-more ti-more-alt"></i>
            </div>
        </li>
            `
        }).join('')
        listSong1.innerHTML = htmls1

        const htmls2 = this.songs.map((song, index) => {
            return `
            <li class="row container__playlist-song-item ${index === this.currentIndex ? 'active' : ''}" data-index='${index}'>
            <div class="col c-5 container__playlist-song-item-left">
                <div class="container__playlist-song-item-img">
                    <i class="ti-music-alt"></i>
                    <img src="${song.image}" alt="" >
                </div>
                <div class="container__playlist-song-item-info">
                    <span class="container__playlist-song-item-name">${song.name}</span>
                    <span class="container__playlist-song-item-singer">${song.singer}</span>
                </div>
            </div>
            <div class="col c-4 container__playlist-song-item-center">
                <span class="container__playlist-song-item-center-name">${song.name} (Single)</span>
            </div>
            <div class="col c-3 container__playlist-song-item-right">
                <i class="ti-microphone container__playlist-song-icon-mic"></i>
                <i class="ti-heart container__playlist-song-icon-heart active"></i>
                <div class="container__playlist-song-item-right-time">
                    <span>4:47</span>
                    <i class="ti-more-alt container__playlist-song-icon-more"></i>
                </div>
            </div>
        </li>
            `
        }).join('')
        listSong2.innerHTML = htmls2
        
    },

    defineProperties: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.songs[this.currentIndex]
            }
        })
    },

    // Load Bài hát hiện tại
    loadCurrentSong: function () {
        if (!this.isLoop) {
            const imgCurrentSong = $('.music-playing-info-img img')
            const nameCurrentSong = $('.info-name')
            const singerCurrentSong = $('.info-singer')
            
            imgCurrentSong.src = this.currentSong.image
            nameCurrentSong.innerText = this.currentSong.name
            singerCurrentSong.innerText = this.currentSong.singer
            audio.src = this.currentSong.path
    
            audio.onloadeddata = () => {
                // durationtime.innerText = audio.duration
                progressTrackUpdate.style.width = 0 + '%'
            }
        } 
    },

    scrollToSongActive: function () {
        setTimeout(() => {
            $('.container__playlist-song-item.active').scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
            });
        }, 300)
    },

    handleEvents: function () {
        _this = this

        // when play / pause song
        if (playing) {
            playing.onclick = function() {
                playing.classList.toggle('playing')
                if (playing.classList.contains('playing')) {
                    audio.play()
                } else {
                    audio.pause()
                }
            }
        }

        // When prev song
        prevSong.onclick = function () {
            if (_this.currentIndex <= 0) {
                _this.currentIndex = _this.songs.length - 1
                _this.loadCurrentSong()
                _this.render()
                _this.scrollToSongActive()
                if (playing.classList.contains('playing')) {
                    audio.play()
                }
            } else {
                _this.currentIndex = _this.currentIndex - 1
                _this.loadCurrentSong()
                _this.render()
                _this.scrollToSongActive()
                if (playing.classList.contains('playing')) {
                    audio.play()
                }
            }
        }

        // When next Song
        nextSong.onclick = function () {
            if (!_this.isLoop) {
                if (_this.currentIndex >= _this.songs.length - 1) {
                    _this.currentIndex = 0
                    _this.loadCurrentSong()
                    _this.render()
                    _this.scrollToSongActive()
                    if (playing.classList.contains('playing')) {
                        audio.play()
                    }
                } else {
                     _this.currentIndex = _this.currentIndex + 1
                     _this.loadCurrentSong()
                    _this.render()
                    _this.scrollToSongActive()
                    if (playing.classList.contains('playing')) {
                        audio.play()
                    }
                } 
            }
            if (_this.isLoop) {
                _this.isLoop = !_this.isLoop
                loopSong.classList.remove("active")
                if (_this.currentIndex >= _this.songs.length - 1) {
                    _this.currentIndex = 0
                    _this.loadCurrentSong()
                    _this.render()
                    _this.scrollToSongActive()
                    if (playing.classList.contains('playing')) {
                        audio.play()
                    }
                } else {
                     _this.currentIndex = _this.currentIndex + 1
                     _this.loadCurrentSong()
                    _this.render()
                    _this.scrollToSongActive()
                    if (playing.classList.contains('playing')) {
                        audio.play()
                    }
                } 
            }
        }

        // When loop song
        loopSong.onclick = function () {
            _this.isLoop = !_this.isLoop
            loopSong.classList.toggle("active", _this.isLoop)
            console.log(_this.isLoop)
        }

        // when random song
        randomSong.onclick = function () {
            _this.isRandom = !_this.isRandom
            randomSong.classList.toggle("active", _this.randomSong)
        }


        // When song end
        audio.onended = function () {
            if (_this.isLoop) {
                audio.play()
            }
            if (_this.isRandom) {
                const crid = _this.currentIndex
                _this.currentIndex = Math.floor(Math.random() * 10)
                while (_this.currentIndex === crid) {
                    _this.currentIndex = Math.floor(Math.random() * 10)
                    if (_this.currentIndex != crid) break
                }
                _this.loadCurrentSong()
                _this.render()
                _this.scrollToSongActive()
                audio.play()
            }
            if (_this.isLoop && _this.isRandom) {
                audio.play()
            }
            if (!_this.isLoop) {
                nextSong.click()
            }
        }
        
        // Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function () {
            const progressPercent = Math.floor((audio.currentTime / audio.duration) * 100)
            const progressSecond = Math.floor(audio.currentTime)
            progress.value = progressPercent
            // tracktime.innerText = progressSecond
            progressTrackUpdate.style.width = progressPercent + '%'

            if (audio.duration) {
                // times look like 05:20 (ab:cd)
                // get current time 
                let a,b,c,d
                a = ''
                c = ''
                b = Math.floor(progressSecond / 60)
                d = Math.floor(progressSecond % 60)
                if (b < 10) {
                    a = '0'
                }
                if (d < 10) {
                    c = 0
                }
                tracktime.innerText =  a + b + ':' + c + d

                // get duration time 
                // times look like 05:20 (ef:gh)
                let e,f,g,h,durationTime
                durationTime = audio.duration
                e =''
                g = ''
                f = Math.floor(durationTime / 60)
                h = Math.floor(durationTime % 60)
                if (f < 10) {
                    e = '0'
                }
                if (h < 10) {
                    g = 0
                }
                durationtime.innerText = e + f + ':' + g + h
            }

        }

        // Khi tác động thay đổi tiến độ bài hát
        progress.onchange = function() {
            let percent = progress.value
            audio.currentTime = progress.value * audio.duration / 100
            progressTrackUpdate.style.width = percent + '%'
        }

        // Khi tăng giảm volume song 
        progressVolume.onchange = function() {
            audio.volume = progressVolume.value / 100
            if (audio.volume === 0) {
                volumeActive.classList.remove('active')
                volumeActive.classList.add('no-active')
                volumeMute.classList.remove('no-active')
                volumeMute.classList.add('active')
            } else {
                volumeMute.classList.remove('active')
                volumeMute.classList.add('no-active')
                volumeActive.classList.remove('no-active')
                volumeActive.classList.add('active')
            }
        }

        // Khi mute volume
        volumeActive.onclick = function() {
            if (!audio.muted) {
                audio.muted = !audio.muted
                progressVolume.value = 0
                volumeActive.classList.remove('active')
                volumeActive.classList.add('no-active')
                volumeMute.classList.remove('no-active')
                volumeMute.classList.add('active')
            }
        }
        volumeMute.onclick = function() {
            if (audio.muted) {
                audio.muted = !audio.muted
                progressVolume.value = 100
                volumeMute.classList.remove('active')
                volumeMute.classList.add('no-active')
                volumeActive.classList.remove('no-active')
                volumeActive.classList.add('active')
            }
            if (volumeActive.classList.contains('no-active')) {
                progressVolume.value = 100 
                audio.volume = 1
                volumeMute.classList.remove('active')
                volumeMute.classList.add('no-active')
                volumeActive.classList.remove('no-active')
                volumeActive.classList.add('active')
            }
        }

        // Khi click vào bài hát
        listSongs.onclick = function (e) {
            const songNode = e.target.closest('.container__playlist-song-item:not(.active)')
            const nameSinger = e.target.closest('.container__playlist-song-item-singer')
            const nameSong = e.target.closest('.container__playlist-song-item-center-name')
            const mic = e.target.closest('.container__playlist-song-icon-mic')
            const heart = e.target.closest('.container__playlist-song-icon-heart')
            const more = e.target.closest('.container__playlist-song-icon-more')
            
            if ( songNode || nameSinger || nameSong || mic || heart || more ) {
                    // Khi muốn click vào khoảng có thể chuyển sang bài khác 
                    if (songNode && !nameSinger && !nameSong && !mic && !heart && !more ) {
                        _this.currentIndex = Number(songNode.dataset.index)
                        _this.loadCurrentSong()
                        _this.render()
                        if (playing.classList.contains('playing')) {
                            audio.play()
                        } else {
                            audio.pause()
                        }
                    }

                    // Khi click vào tên tác giả 
                    if (nameSinger) {
                        console.log(1)
                    }

                    // Khi click vào tên bài hát ở giữa 
                    if (nameSong) {
                        console.log(2)
                    }

                    // Khi click vào mic
                    if (mic) {
                        console.log(3)
                    }

                    // Khi click vào heart
                    if (heart) {
                        heart.classList.toggle('active')
                    }

                    // Khi click vào more
                    if (more) {
                        console.log(5)
                    }
            }
        }

        listSong2.onclick = function (e) {
            const songNode = e.target.closest('.container__playlist-song-item:not(.active)')
            const nameSinger = e.target.closest('.container__playlist-song-item-singer')
            const nameSong = e.target.closest('.container__playlist-song-item-center-name')
            const mic = e.target.closest('.container__playlist-song-icon-mic')
            const heart = e.target.closest('.container__playlist-song-icon-heart')
            const more = e.target.closest('.container__playlist-song-icon-more')
            
            if ( songNode || nameSinger || nameSong || mic || heart || more ) {
                    // Khi muốn click vào khoảng có thể chuyển sang bài khác 
                    if (songNode && !nameSinger && !nameSong && !mic && !heart && !more ) {
                        _this.currentIndex = Number(songNode.dataset.index)
                        _this.loadCurrentSong()
                        _this.render()
                        if (playing.classList.contains('playing')) {
                            audio.play()
                        } else {
                            audio.pause()
                        }
                    }

                    // Khi click vào tên tác giả 
                    if (nameSinger) {
                        console.log(1)
                    }

                    // Khi click vào tên bài hát ở giữa 
                    if (nameSong) {
                        console.log(2)
                    }

                    // Khi click vào mic
                    if (mic) {
                        console.log(3)
                    }

                    // Khi click vào heart
                    if (heart) {
                        heart.classList.toggle('active')
                    }

                    // Khi click vào more
                    if (more) {
                        console.log(5)
                    }
            }
        }

        listSong1.onclick = function (e) {
            const songNode = e.target.closest('.menu__right-list-song:not(.active)')
            const nameSinger = e.target.closest('.menu__right-list-song-item-singer')
            const heart = e.target.closest('.music-playing-btn-heart')
            const more = e.target.closest('.music-playing-btn-more')
            if (songNode || nameSinger || heart || more) {
                if (songNode && !nameSinger && !heart && !more) {
                    _this.currentIndex = Number(songNode.dataset.index)
                    _this.loadCurrentSong()
                    _this.render()
                    if (playing.classList.contains('playing')) {
                        audio.play()
                    } else {
                        audio.pause()
                    }
                }
                // when click name Singers 
                if (nameSinger) {
                    console.log(1)
                } 

                // when click heart 
                if (heart) {
                    heart.classList.toggle('active')
                }

                // when click more 
                if (more) {
                    console.log(1)
                }
            }
        }
        // when click change UI
        const menuList = $$('.container__info-menu-btn')
        const menuUIs = $$('.container__playlist')
        menuList.forEach((menuItem, index) => {
            const menuUI = menuUIs[index]
            menuItem.onclick = function () {
                const playlist = $('.container__playlist-3')
                const podcast = $('.container__playlist-4')
                const titlePlaylist = $('.container__title-playlist')
                const titlePodcast = $('.container__title-podcast')

                $('.container__info-menu-btn.btn-active').classList.remove('btn-active')
                $('.container__playlist.active').classList.remove('active')
                this.classList.add('btn-active')
                menuUI.classList.add('active')

                if (menuItem.classList.contains('btn-1')) {
                    $('.container__song-title-right').style.display = 'flex'
                    $('.container__song-title-left').innerText = 'Chương trình'
                    $('.title-right-all').style.display = 'block'
                    $('.container__song-title-left').innerText = 'Bài hát'
                    playlist.classList.add('no-hide')
                    podcast.classList.add('no-hide')
                    titlePlaylist.classList.add('no-hide')
                    titlePodcast.classList.add('no-hide')
                }
                if (menuItem.classList.contains('btn-2')) {
                    $('.container__song-title-right').style.display = 'flex'
                    $('.title-right-all').style.display = 'none'
                    $('.container__song-title-left').innerText = 'Bài hát'
                    playlist.classList.remove('no-hide')
                    podcast.classList.remove('no-hide')
                    titlePlaylist.classList.remove('no-hide')
                    titlePodcast.classList.remove('no-hide')
                }
                if (menuItem.classList.contains('btn-3')) {
                    $('.container__song-title-right').style.display = 'none'
                    $('.container__song-title-left').innerText = 'Playlist'
                    playlist.classList.remove('no-hide')
                    podcast.classList.remove('no-hide')
                    titlePlaylist.classList.remove('no-hide')
                    titlePodcast.classList.remove('no-hide')
                }
                if (menuItem.classList.contains('btn-4')) {
                    $('.container__song-title-right').style.display = 'none'
                    $('.container__song-title-left').innerText = 'Chương trình'
                    playlist.classList.remove('no-hide')
                    podcast.classList.remove('no-hide')
                    titlePlaylist.classList.remove('no-hide')
                    titlePodcast.classList.remove('no-hide')
                } 
            }
        });

        // Xử lí giao diện
        // Khi click vào ô input tìm kiếm
        inputSearch.onclick = function () {
            inputSearch.classList.add('active')
        }

        // when click setting btn 
        settingBtn.onclick = function () {
            if (!settingBtn.classList.contains('active')) {
                settingBtn.classList.add('active')
            }
            else {
                settingBtn.classList.remove('active')
            }
        }

        // when click anywhere on the screen
        document.onclick = function (e) {
            // hide content input & setting
            const clickIconSearch = e.target.closest('.container__header-search-icon')
            const clickHistory = e.target.closest('.container__header-history-search')
            const clickInput = e.target.closest('.container__header-search-info')
            const clickSettingList = e.target.closest('.header__setting-list')
            const clickSettingBtn = e.target.closest('.container__header-list-setting')
            const menuRightList = e.target.closest('.menu__right')
            const menuRightBtn = e.target.closest('.menu__right-more')
            const menuRightItem = e.target.closest('.menu__right-list-song')
            const menu = e.target.closest('.menu')
            const menuMobile = e.target.closest('.menu__mobile')

            if (!clickInput && !clickHistory && !clickIconSearch) {
                if (inputSearch.classList.contains('active')) {
                    inputSearch.classList.remove('active')
                }
            }

            if (!clickSettingList && !clickSettingBtn) {
                if (settingBtn.classList.contains('active')) {
                    settingBtn.classList.remove('active')
                }                       
            }

            if (!menuRightList && !menuRightBtn && !menuRightItem) {
                if (menuRight.classList.contains('active')) {
                    menuRight.classList.remove('active')
                }   
            }

            const lovely = $('.music-playing-btn .music-playing-btn-heart')
            if (e.target.closest('.music-playing-btn .music-playing-btn-heart')) {
                lovely.classList.toggle('active')
            }

            if (!menu && !menuMobile) {
                if ($('.menu').classList.contains('active')) {
                    $('.menu').classList.remove('active')
                    _this.isMenuMobile = !_this.isMenuMobile
                }
            }
        }

        // When click open / close the more btn in the bottom right
        menuRightMore.onclick = function () {
            $('.menu__right').classList.toggle('active')
        }

        // transition img 
        const img = $$('.container__slide-img')
        imgTransition = function (){
            const slideImgFirst = $('.container__slide-img.first')
            const slideImgSecond = $('.container__slide-img.second')
            const slideImgThird = $('.container__slide-img.third')

            slideImgThird.classList.replace('third', 'second')
            slideImgSecond.classList.replace('second', 'first')
            slideImgFirst.classList.replace('first', 'third')

            setTimeout(imgTransition, 1500)
        }
        imgTransition()

        // When click expand menu 
        menuFooterMore.onclick = () => {
            if (!this.isMore) {
                $('.menu').classList.add('active')
                $('.menu__tablet').style.display = 'none'
                this.isMore = !this.isMore
            }
        }

        // When click less menu 
        menuFooterLess.onclick = () => {
            if (this.isMore) {
                $('.menu').classList.remove('active')
                $('.menu__tablet').style.display = 'block'
                this.isMore = !this.isMore
            }
            if (this.isMenuMobile) {
                $('.menu').classList.remove('active')
                this.isMenuMobile = !this.isMenuMobile
            }
        }

        // when click menu in UI mobile 
        menuMobile.onclick = () => {
            console.log(this.isMenuMobile)
            if (!this.isMenuMobile) {
                $('.menu').classList.add('active')
                this.isMenuMobile = !this.isMenuMobile
            }
        }
    },


    // Call func
    start: function() {
        // Định nghĩa thuộc tính 
        this.defineProperties()

        // Xử lí sự kiện
        this.handleEvents()

        // Load bài hát hiện tại
        this.loadCurrentSong()

        // Render songs 
        this.render()
    }
}

app.start()