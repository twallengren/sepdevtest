let creatures = [
    {
        name: "Halloween Cat",
        image_url: "https://www.animalsheltering.org/sites/default/files/images/magazine/black-cat-pumpkins-bays-blog-m146689.jpg",
        scary: {
            level: 1
        },
        id: 1
    },
    {
        name: "Ghost",
        image_url: "http://konknet.com/-/wp-content/uploads/2017/08/a-ghost-story-thymb.jpg",
        scary: {
            level: 7
        },
        id: 2
    }
]

let id = 3;

module.exports = {

    read: (req, res, next) => {

        res.status(200).send(creatures);

    },

    delete: (req, res, next) => {

        const { id } = req.params;

        updatedcreatures = creatures.filter(creature => {

            return creature.id != id

        })

        creatures = updatedcreatures;

        res.status(200).send(creatures)

    },

    update: (req, res, next) => {

        const { id } = req.params;
        const { changename, changeimg, changescary } = req.body;

        updatedcreatures = creatures.map(creature => {
            if (creature.id == id) {
                return {
                    id: creature.id,
                    name: changename,
                    image_url: changeimg,
                    scary: {
                        level: changescary
                    }
                }
            } else {
                return creature
            }
        })

        creatures = updatedcreatures

        res.status(200).send(creatures)

    },

    add: (req, res, next) => {

        const { newcreature, newimg, scary } = req.body;
        const creature = {
            id: id,
            name: newcreature,
            image_url: newimg,
            scary: scary
        }

        creatures.push(creature);
        id++;
        res.status(200).send(creatures);

    },

};