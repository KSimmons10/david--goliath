namespace SpriteKind {
    export const ammo = SpriteKind.create()
    export const main = SpriteKind.create()
    export const npc = SpriteKind.create()
}
function introDialog () {
    game.setDialogFrame(img`
        ..bbabbaabbaabbaabbbbb..
        .bddbaddbaddbaddbabbddb.
        addddbaddbaddbaddbadddda
        addddbbaabbaabbaabbdddda
        abddb11111111111111bddba
        bbab1111111111111111bbab
        babb1111111111111111badb
        abda1111111111111111adda
        adda1111111111111111adba
        bdab1111111111111111bbab
        babb1111111111111111badb
        abda1111111111111111adda
        adda1111111111111111adba
        bdab1111111111111111bbab
        babb1111111111111111badb
        abda1111111111111111adda
        adda1111111111111111adba
        bdab1111111111111111bbab
        babb1111111111111111babb
        abddb11111111111111bddba
        addddbbaabbaabbaabbdddda
        addddabddabddabddabdddda
        .addbbabddabddabddabdda.
        ..aaabbaabbaabbaabbaaa..
        `)
    game.showLongText("Why do you come out and line up for battle?", DialogLayout.Bottom)
    pause(500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    scene.setBackgroundImage(assets.image`soldiergrounds`)
    Goliath = sprites.create(assets.image`goliath`, SpriteKind.Player)
    Goliath.setPosition(69, 47)
    scaling.scaleByPercent(Goliath, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    pause(500)
    game.showLongText("Choose a man and have him come down to me.", DialogLayout.Bottom)
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    scene.setBackgroundImage(assets.image`davidEntrance`)
    david = sprites.create(assets.image`David`, SpriteKind.main)
    david.setPosition(69, 47)
    rock = sprites.create(assets.image`stone`, SpriteKind.ammo)
    rock.setPosition(33, 79)
    game.showLongText("I come against you in the name of the Lord Almighty", DialogLayout.Bottom)
}
function warIntro () {
    scene.setBackgroundImage(assets.image`soldiergrounds`)
    isreali2 = sprites.create(assets.image`soldier1`, SpriteKind.Player)
    isreali2.setPosition(randint(3, 45), randint(75, 115))
    philisti2 = sprites.create(assets.image`soldier2`, SpriteKind.Player)
    philisti2.setPosition(randint(85, 115), randint(75, 115))
    isreali = sprites.create(assets.image`soldier3`, SpriteKind.Player)
    isreali.setPosition(randint(3, 45), randint(75, 115))
    philisti = sprites.create(assets.image`soldier4`, SpriteKind.Player)
    philisti.setPosition(randint(85, 115), randint(75, 115))
    Goliath = sprites.create(assets.image`myImage`, SpriteKind.Player)
    Goliath.setPosition(132, 73)
}
let philisti: Sprite = null
let isreali: Sprite = null
let philisti2: Sprite = null
let isreali2: Sprite = null
let rock: Sprite = null
let david: Sprite = null
let Goliath: Sprite = null
game.splash("press A")
warIntro()
game.splash("The story of ", "David & Goliath")
pause(500)
introDialog()
forever(function () {
    scene.setBackgroundColor(7)
})
