// our JS code:
document.getElementById("year").innerText = new Date().getFullYear();

const app = Vue.createApp({
    data() {
        return {
            // 1. adding the text
            product: 'A Court of Thorns and Roses',
            description: 'Feyre Archeron, a huntress struggling to feed her family, kills a wolf in the woods. She soon finds herself dragged into the magical land of Prythian by a beast-like faerie lord. As she discovers the secrets of his world and falls for him, Feyre must also face a deadly curse threatening to destroy everything.',

            // for this file index6, adding a new data property: author
            author: "Sarah J. Maas",

            // 2. adding the img for v-bind
            img: 'https://i.pinimg.com/736x/06/cf/34/06cf34736a0530b7fb82ac01987a47b0.jpg',
            url: 'https://sarahjmaas.com/',

            // 3. adding boolean property for if condition: modify true/false for testing
            inStock: true,
            // adding more logical condition: put 12, 7, and 0 for testing
            inventory: 12,
            onSale: true,

            // 4. adding a list:
            categories: ['Fantasy', 'Romance', 'Adventure', 'Mythology', 'Young adult'],

            /*
            Updating each object by adding a quantity,
            so each individual item (based on its color) can have different quantity
            > Black Color: #000 => 10 items available
            > White Color: #fff => 10 items available
            > Yellow Color => 0 item(s) available (Out of the stock)
            */
            options: [{
                    id: 1010,
                    color: '#ea3a4f',
                    img: 'https://i.pinimg.com/736x/06/cf/34/06cf34736a0530b7fb82ac01987a47b0.jpg',
                    title: 'A Court of Thorns and Roses',
                    description: 'Feyre Archeron, a huntress struggling to feed her family, kills a wolf in the woods. She soon finds herself dragged into the magical land of Prythian by a beast-like faerie lord. As she discovers the secrets of his world and falls for him, Feyre must also face a deadly curse threatening to destroy everything.',
                    quantity: 5
                },
                {
                    id: 1020,
                    color: '#32a996',
                    img: 'https://i.pinimg.com/736x/c5/4e/90/c54e90df5064d782315ab7912af1cda8.jpg',
                    title: 'A Court of Mist and Fury',
                    description: 'After the harrowing events Under the Mountain, Feyre struggles to rebuild her life and cope with her new powers as a High Fae. When the enigmatic Rhysand, High Lord of the Night Court, calls on her to honor a bargain, she discovers a world of darkness and beauty—and uncovers her own inner strength.',
                    quantity: 0
                },
                {
                    id: 1030,
                    color: '#c34d97',
                    img: 'https://i.pinimg.com/736x/b1/11/d1/b111d10a531da72497bd131fdcf2caf1.jpg',
                    title: 'A Court of Wings and Ruin',
                    description: 'As Prythian faces the threat of war, Feyre must rally allies across the land to fight a powerful enemy. With love, loyalty, and sacrifice tested to their limits, the fate of her world rests in her hands. Can Feyre and her companions triumph against overwhelming odds?',
                    quantity: 2
                },
                {
                    id: 1040,
                    color: '#2ba6d2',
                    img: 'https://i.pinimg.com/736x/ec/95/35/ec95355875606e4bc12dea81f4235523.jpg',
                    title: 'A Court of Frost and Starlight',
                    description: 'Set during the Winter Solstice, this novella offers a glimpse into the lives of Feyre, Rhysand, and their friends after the events of the war. As they rebuild their shattered world, they find joy in the bonds of friendship, family, and love.',
                    quantity: 4
                },
                {
                    id: 1050,
                    color: '#f26c25',
                    img: 'https://i.pinimg.com/736x/99/44/cc/9944cc28049ff266f3887f15276150f6.jpg',
                    title: 'A Court of Silver Flames',
                    description: 'This spin-off focuses on Feyre\'s sister, Nesta Archeron, and the warrior Cassian. Haunted by her past and grappling with her anger, Nesta must confront her inner demons. With Cassian\'s unwavering support, she discovers resilience and love in unexpected places.',
                    quantity: 1
                }
            ],

            // adding cart option for number of items:
            cart: 0,

        }
    }, // end data()
    methods: {
        addToCart() {
            // referring to THIS cart within our data:
            this.cart++
        },
        updateimg(styleimg) {
            this.img = styleimg;
        },
        updateBook(option) {
            console.log('Updating book to:', option.title);
            console.log('New description:', option.description);
            this.img = option.img;
            this.product = option.title;
            this.description = option.description;
        },
        // Task: Add a button for decrement the cart (a method for this option):
        removeFromCart() {
            if (this.cart >= 1) {
                this.cart -= 1
            }
        }
    }, // end methods

    // Adding the "computed" property for "computed properties":
    computed: {
        // Creating a computed property called "title":
        title() {
            // Computing the value of author + space + product
            return this.author + ' ' + this.product
        }
    }
}); // end Vue app
