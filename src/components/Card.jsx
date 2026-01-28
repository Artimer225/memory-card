export default function WinAward() {
    return (
        <dialog className={'win-message'}>
            <h2>YOU HAVE WON! YOU ARE REALLY TUFF!</h2>
            <img src={'/images/winner.gif'} alt='rakko'/>
            <p>please reload the page, i was too lazy to implement this</p>
        </dialog>
    )
}