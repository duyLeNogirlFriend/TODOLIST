import icons from "./icons"
const { BsMusicNoteList, BsDisc, AiOutlineLineChart, MdOutlineNotes} = icons

export const sidebarMenu = [
    {
        path: 'my_music',
        text: 'My Music',
        icon: <BsMusicNoteList size={24} height={5}/>
    },
    {
        path: '',
        text: 'Discovery',
        icon: <BsDisc size={24}/>
    },
    {
        path: 'zingchart',
        text: '#zingchart',
        icon: <AiOutlineLineChart size={24}/>
    },
    {
        path: 'following',
        text: 'Following',
        icon: <MdOutlineNotes size={24}/>
    },

]