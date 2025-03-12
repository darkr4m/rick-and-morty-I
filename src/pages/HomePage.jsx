import Rick from '../assets/Drunk_Rick.png'

function HomePage(){
    return (
        <>
        <div className="cta">
                <img src={Rick} alt="Drunk Rick Sanchez standing in front of a portal, holding a portal gun"/>
            <div className="talkbubble">
                <h1>Rick C-137:</h1>
                <p>
                Alright, alright, settle down, you... *gestures vaguely* ...meatbags. Look, I get it. 
                You're probably out there, wasting your limited lifespan on, like, feelings and meaning and other garbage concepts. 
                But guess what? I've got something infinitely more important. 
                Something that'll make your pathetic little brains leak out your ears in a good way. 
                It's called... *burp* ...Rick and Morty, and it's happening right now, right here, at... 
                *muttering, fiddling with a portal gun* ...hold on, gotta recalibrate this thing... 
                yeah...
                </p>
                
                <p>
                So, ditch the existential dread, forget about your crippling student loan debt, and come watch me and Morty screw up the multiverse. 
                It's either that or, y'know, try to find a meaningful relationship. Which, let's be honest, is statistically less likely to result in interdimensional parasites.
                Wubba lubba dub-dub, losers. Now get in there before I start selling your kidneys for portal fluid.
                </p>


            </div>
        </div>
        <button>YEET</button>
        </>
    )
}

export default HomePage