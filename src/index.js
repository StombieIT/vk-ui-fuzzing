document.getElementById('inp').addEventListener('input', evt => {
    throw new Error();
});

gremlins.createHorde({
    species: [
        gremlins.species.formFiller(),
        gremlins.species.clicker({
            clickTypes: ['click'],
        }),
        // gremlins.species.toucher(),
    ]
}).unleash();