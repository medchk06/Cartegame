const cards = {
    blue: [
        // Niveau 1-10 : Découverte légère
        "Quel est ton plat préféré et pourquoi ?",
        "Si tu pouvais voyager n\"importe où demain, où irais-tu ?",
        "Quelle est ta série ou ton film préféré en ce moment ?",
        "Quel est ton talent caché ?",
        "Quelle est ta saison préférée et pourquoi ?",
        "Si tu pouvais avoir un super-pouvoir, lequel choisirais-tu ?",
        "Quel est ton animal de compagnie idéal ?",
        "Quelle est ta chanson qui te met toujours de bonne humeur ?",
        "Si tu pouvais apprendre une nouvelle langue, laquelle ?",
        "Quel est ton type de vacances idéal ?",
        
        // Niveau 11-20 : Approfondissement
        "Si tu pouvais dîner avec une personne célèbre, qui choisirais-tu ?",
        "Quelle est la chose la plus spontanée que tu aies faite ?",
        "Quel est ton rêve d\"enfance que tu aimerais réaliser ?",
        "Si tu pouvais changer une chose sur toi physiquement, que serait-ce ?",
        "Quelle est ta plus grande peur irrationnelle ?",
        "Décris-toi en trois mots que tes amis utiliseraient.",
        "Quel est le compliment qui t\"a le plus marqué ?",
        "Si tu écrivais un livre, de quoi parlerait-il ?",
        "Quelle est ta façon préférée de décompresser après une journée difficile ?",
        "Si tu pouvais maîtriser n\"importe quelle compétence, laquelle ?",
        
        // Niveau 21-30 : Introspection
        "Quelle est la leçon la plus importante que la vie t\"a enseignée ?",
        "Décris un moment où tu t\"es senti vraiment fier de toi.",
        "Quelle est ta plus grande motivation dans la vie ?",
        "Si tu pouvais changer une chose dans le monde, que serait-ce ?",
        "Quel trait de caractère admires-tu le plus chez les autres ?",
        "Quelle est ta définition du bonheur ?",
        "Décris un moment où tu as complètement changé d\"avis sur quelque chose.",
        "Quelle est ta plus grande source d\"inspiration ?",
        "Comment gères-tu le stress et l\"anxiété ?",
        "Quel est ton plus grand accomplissement personnel ?",
        
        // Niveau 31-40 : Vulnérabilité modérée
        "Raconte un moment où tu t\"es senti vraiment incompris.",
        "Quelle est ta plus grande insécurité sociale ?",
        "Décris une fois où tu as dû surmonter une peur importante.",
        "Quel aspect de ta personnalité aimerais-tu changer ?",
        "Raconte un moment où tu as ressenti une profonde gratitude.",
        "Quelle est la chose la plus difficile que tu aies eu à accepter sur toi ?",
        "Décris un moment où tu t\"es senti complètement authentique.",
        "Quelle est ta plus grande difficulté dans les relations ?",
        "Raconte une fois où tu as dû faire un choix très difficile.",
        "Quel est ton plus grand regret en amitié ?",
        
        // Niveau 41-50 : Intimité profonde
        "Quelle partie de toi caches-tu le plus aux autres ?",
        "Raconte le moment où tu t\"es senti le plus vulnérable.",
        "Quelle est la vérité sur toi que tu as le plus de mal à admettre ?",
        "Décris un moment où tu as eu honte de toi-même.",
        "Quel est le mensonge que tu te racontes le plus souvent ?",
        "Raconte une fois où tu as vraiment déçu quelqu\"un d\"important.",
        "Quelle est ta peur la plus profonde concernant l\"avenir ?",
        "Décris un moment où tu t\"es senti complètement seul(e).",
        "Quel secret gardes-tu que personne ne connaît ?",
        "Quelle est la chose la plus courageuse que tu aies jamais faite émotionnellement ?"
    ],
    red: [
        // Niveau 1-10 : Défis légers
        "Raconte une fois où tu as fait quelque chose d\"embarrassant en public.",
        "Quel est ton plus gros mensonge innocent ?",
        "Décris une fois où tu as eu tort mais n\"as pas voulu l\"admettre.",
        "Raconte un moment où tu as jugé quelqu\"un trop vite.",
        "Quelle est ta mauvaise habitude la plus agaçante ?",
        "Décris une fois où tu as procrastiné sur quelque chose d\"important.",
        "Raconte un moment où tu as été jaloux de quelqu\"un proche.",
        "Quel est ton plus grand échec culinaire ?",
        "Décris une fois où tu as dit quelque chose que tu regrettes.",
        "Raconte un moment où tu as eu peur de quelque chose de stupide.",
        
        // Niveau 11-20 : Erreurs et apprentissages
        "Raconte un moment où tu as échoué à quelque chose d\"important.",
        "Décris une fois où tu as blessé quelqu\"un sans le vouloir.",
        "Quel est ton plus grand regret professionnel ou scolaire ?",
        "Raconte un moment où tu as menti pour éviter les ennuis.",
        "Décris une fois où tu as abandonné quelque chose trop facilement.",
        "Quel est le pire conseil que tu aies donné à quelqu\"un ?",
        "Raconte un moment où tu as été hypocrite.",
        "Décris une fois où tu as laissé tomber un ami.",
        "Quel est ton plus grand regret en amour ?",
        "Raconte un moment où tu as eu honte de ta réaction.",
        
        // Niveau 21-30 : Luttes internes
        "Décris une période où tu as lutté contre tes propres pensées.",
        "Raconte un moment où tu t\"es senti complètement perdu.",
        "Quelle est ta plus grande insécurité physique ?",
        "Décris une fois où tu as eu des pensées très négatives sur toi.",
        "Raconte un moment où tu as eu peur de ne pas être à la hauteur.",
        "Quelle est la critique qui t\"a le plus blessé ?",
        "Décris une période où tu t\"es senti invisible.",
        "Raconte un moment où tu as douté de tes capacités.",
        "Quelle est ta plus grande peur concernant l\"opinion des autres ?",
        "Décris une fois où tu t\"es senti coupable sans raison.",
        
        // Niveau 31-40 : Confrontation et acceptation
        "Raconte un moment où tu as dû faire face à une vérité difficile sur toi.",
        "Quelle est la chose la plus difficile que tu aies eu à pardonner ?",
        "Décris une fois où tu as dû admettre que tu avais tort publiquement.",
        "Quel est ton plus grand défi en matière de confiance en soi ?",
        "Raconte un moment où tu as dû te défendre face à une injustice.",
        "Quelle est la chose que tu as le plus de mal à accepter chez toi ?",
        "Décris une fois où tu as ressenti de la honte pour les actions de quelqu\"un d\"autre.",
        "Quel est ton plus grand obstacle à l\"épanouissement personnel ?",
        "Raconte un moment où tu as dû prendre une décision impopulaire.",
        "Quelle est la chose la plus difficile que tu aies eu à lâcher prise ?"
    ],
    green: [
        // Niveau 1-10 : Rêves et aspirations légères
        "Si tu pouvais apprendre une nouvelle compétence en un jour, laquelle ?",
        "Quel est ton petit plaisir coupable ?",
        "Si tu pouvais vivre dans n\"importe quelle époque, laquelle choisirais-tu ?",
        "Quel est le meilleur conseil que tu aies jamais reçu ?",
        "Si tu pouvais rencontrer un personnage de fiction, qui serait-ce ?",
        "Quelle est la chose la plus folle que tu aimerais faire un jour ?",
        "Quel est ton livre ou film préféré qui t\"a inspiré ?",
        "Si tu pouvais avoir un animal fantastique, lequel ?",
        "Quelle est ta destination de rêve pour une aventure ?",
        "Quel est ton talent artistique caché ?",
        
        // Niveau 11-20 : Projets et futur proche
        "Quel est un petit objectif que tu t\"es fixé pour cette année ?",
        "Si tu pouvais démarrer une petite entreprise, de quoi s\"agirait-il ?",
        "Quelle est la prochaine compétence que tu aimerais développer ?",
        "Décris ton travail idéal, même s\"il est irréaliste.",
        "Quel est un voyage que tu rêves de faire dans les 5 prochaines années ?",
        "Si tu pouvais apprendre à jouer d\"un instrument, lequel ?",
        "Quelle est une cause qui te tient particulièrement à cœur ?",
        "Quel est un projet personnel sur lequel tu aimerais travailler ?",
        "Si tu pouvais inventer quelque chose, que serait-ce ?",
        "Quelle est ta vision d\"une journée parfaite ?",
        
        // Niveau 21-30 : Vision à long terme et impact
        "Quelle est la contribution que tu aimerais apporter au monde ?",
        "Décris la vie que tu imagines dans 10 ans.",
        "Quel est l\"héritage que tu aimerais laisser ?",
        "Si tu pouvais résoudre un problème mondial, lequel ?",
        "Quelle est ta vision d\"une société idéale ?",
        "Décris un futur où tu te sens pleinement épanoui.",
        "Quel est ton plus grand espoir pour les générations futures ?",
        "Si tu pouvais créer une organisation, quel serait son but ?",
        "Quelle est la chose la plus importante que tu aimerais enseigner ?",
        "Décris un monde où tes valeurs sont universellement partagées.",
        
        // Niveau 31-40 : Défis et résilience
        "Quel est le plus grand défi que tu anticipes dans la réalisation de tes rêves ?",
        "Comment comptes-tu surmonter les obstacles sur ton chemin ?",
        "Raconte un moment où tu as dû faire preuve de grande résilience.",
        "Quelle est la chose la plus difficile que tu aies dû apprendre pour avancer ?",
        "Décris une fois où tu as transformé un échec en opportunité.",
        "Quel est ton plan B si les choses ne se passent pas comme prévu ?",
        "Comment maintiens-tu ta motivation face à l\"adversité ?",
        "Raconte un moment où tu as dû te réinventer.",
        "Quelle est la chose la plus importante que tu as apprise de tes erreurs ?",
        "Décris ta philosophie face aux imprévus de la vie.",
        
        // Niveau 41-50 : Spiritualité et sens
        "Quelle est ta définition du sens de la vie ?",
        "Comment trouves-tu la paix intérieure ?",
        "Quelle est ta relation avec la spiritualité ou la transcendance ?",
        "Décris un moment où tu t\"es senti connecté à quelque chose de plus grand.",
        "Quel est ton plus grand questionnement existentiel ?",
        "Raconte une fois où tu as ressenti une profonde synchronicité.",
        "Quelle est la chose la plus importante que tu as apprise sur l\"univers ?",
        "Décris ton rapport au temps qui passe et à l\"éternité.",
        "Quel est ton plus grand désir pour ton âme ?",
        "Quelle est la chose la plus sacrée pour toi ?"
    ],
    purple: [
        // Niveau 1-10 : Souvenirs légers
        "Quel est ton plus beau souvenir d\"enfance ?",
        "Raconte une anecdote amusante de ton passé.",
        "Quel est ton jeu préféré quand tu étais enfant ?",
        "Décris ton endroit préféré pour te cacher quand tu étais petit.",
        "Quelle est la chose la plus drôle que tu aies faite à l\"école ?",
        "Quel est ton dessin animé ou film d\"enfance préféré ?",
        "Raconte un souvenir de vacances mémorable.",
        "Quelle est la chose la plus précieuse que tu possédais enfant ?",
        "Décris ton plat préféré que ta famille préparait.",
        "Quel est ton surnom d\"enfance ?",
        
        // Niveau 11-20 : Moments marquants
        "Raconte un moment qui a changé ta perspective sur la vie.",
        "Quelle est la personne qui t\"a le plus influencé dans ta jeunesse ?",
        "Décris un événement qui t\"a rendu plus fort.",
        "Quel est le conseil de tes parents qui t\"a le plus marqué ?",
        "Raconte un moment où tu as dû prendre une décision importante seul.",
        "Quelle est la chose la plus inattendue qui te soit arrivée ?",
        "Décris un moment où tu t\"es senti vraiment libre.",
        "Quel est ton plus grand accomplissement jusqu\"à présent ?",
        "Raconte une fois où tu as pris un risque calculé.",
        "Quelle est la chose que tu aurais aimé savoir plus tôt ?",
        
        // Niveau 21-30 : Relations et apprentissages
        "Décris une amitié qui t\"a profondément marqué.",
        "Raconte un moment où tu as appris une leçon importante sur l\"amour.",
        "Quelle est la chose la plus importante que tu as apprise de tes relations ?",
        "Décris une fois où tu as dû dire au revoir à quelqu\"un que tu aimais.",
        "Quel est ton plus grand défi dans tes relations actuelles ?",
        "Raconte un moment où tu as ressenti une connexion profonde avec quelqu\"un.",
        "Quelle est la chose que tu admires le plus chez tes proches ?",
        "Décris une fois où tu as été surpris par la gentillesse d\"un inconnu.",
        "Quel est ton rôle préféré dans un groupe d\"amis ?",
        "Raconte un moment où tu as dû pardonner à quelqu\"un.",
        
        // Niveau 31-40 : Passé et guérison
        "Raconte un souvenir douloureux que tu as réussi à surmonter.",
        "Quelle est la chose de ton passé qui te pèse encore ?",
        "Décris un moment où tu as dû faire le deuil de quelque chose ou quelqu\"un.",
        "Quel est le plus grand défi que tu as rencontré dans ta famille ?",
        "Raconte une fois où tu as dû te reconstruire après une épreuve.",
        "Quelle est la chose que tu aurais aimé changer dans ton passé ?",
        "Décris un moment où tu as ressenti de la colère ou de la rancœur.",
        "Quel est ton processus pour guérir des blessures émotionnelles ?",
        "Raconte une fois où tu as trouvé la force de te relever.",
        "Quelle est la chose la plus importante que tu as apprise sur le pardon ?"
    ]
};



    ],
    joker: [
        // Actions créatives et interactions
        "🤝 Complimente sincèrement la personne à ta droite",
        "🎭 Imite l'expression faciale de quelqu'un dans le groupe",
        "💝 Dis à chaque personne une qualité que tu admires chez elle",
        "🎵 Fredonne une chanson et laisse les autres deviner",
        "🤗 Donne un câlin virtuel (ou réel) à quelqu'un qui en a besoin",
        "🎨 Dessine ton émotion actuelle en 30 secondes",
        "📱 Partage la dernière photo dans ton téléphone",
        "🎪 Raconte une blague ou une histoire drôle",
        "🌟 Pose une question libre à la personne de ton choix",
        "🎯 Choisis qui tire la prochaine carte",
        "🔄 Échange de place avec quelqu'un (physiquement ou virtuellement)",
        "🎭 Joue une émotion et laisse les autres deviner",
        "💭 Partage la première pensée qui te vient à l'esprit",
        "🎲 Lance un défi créatif au groupe",
        "🌈 Décris ta journée idéale en 3 mots",
        "🎪 Fais un compliment à toi-même à voix haute",
        "🤝 Trouve un point commun avec chaque personne présente",
        "🎵 Chante joyeux anniversaire à quelqu'un (même si ce n'est pas son anniversaire)",
        "💫 Fais un vœu à voix haute pour le groupe",
        "🎨 Crée une histoire collective : commence une phrase, chacun ajoute un mot"
    ]
};

