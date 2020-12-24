let cars = [
    {
        id : 1,
        marca: 'Ford',
        modelo: 'Mustang',
        color: 'Blue',
        año: '2003',
        precio: '$21.000',
    },
    {
        id : 2,
        marca: 'Chevrolet',
        modelo: 'Camaro',
        color: 'Yellow',
        año: '2017',
        precio: '$73.000',
    },
    {
        id : 3,
        marca: 'Bugatti',
        modelo: 'Chiron',
        color: 'Blue',
        año: '2018',
        precio: '$120.000',
    },
    {
        id : 4,
        marca: 'Ferrari',
        modelo: 'FF',
        color: 'Red',
        año: '2008',
        precio: '$55.000',
    }
];

function ReadCarsFunction() {
    const carsDisplay = document.getElementById('cars-container');

    let content = ``;
    cars.forEach((it) => {
        content += `<tr>
                        <th scope="col">${it.id}</th>
                        <td>${it.marca}</td>
                        <td>${it.modelo}</td>
                        <td>${it.color}</td>
                        <td>${it.año}</td>
                        <td>${it.precio}</td>
                        <td>
                            <button onclick="DeleteCarsFunction(${it.id})" class="btn btn-danger">
                                Eliminar
                            </button>
                        </td>
                    </tr>`
    });

    carsDisplay.innerHTML = content;
}

function DeleteCarsFunction(id) {
    const index = cars.findIndex((user) => user.id == id );
    cars.splice(index, 1);
    ReadCarsFunction();
}

function CreateCarsFunction() {
    const inputId = document.getElementById('id');
    const identifier = inputId.value;
    

    const inputMake = document.getElementById('marca');
    const make = inputMake.value;

    const inputModel = document.getElementById('modelo');
    const model = inputModel.value;

    const inputColor = document.getElementById('color');
    const color = inputColor.value;

    const inputYear = document.getElementById('año');
    const year = inputYear.value;

    const inputPrice = document.getElementById('precio');
    const price = inputPrice.value;

    const id = cars[cars.length - 1].id + 1;

    if (identifier == '') {
        const newCar = {
            id,
            marca: make,
            modelo: model,
            color,
            año: year,
            precio: price,
        };
    
        cars.push(newCar);

    }else {
        let ExistentCar = cars.find((element)=>element.id == identifier);
        ExistentCar['marca'] = make;
        ExistentCar['modelo'] = model;
        ExistentCar['color'] = color;
        ExistentCar['año'] = year;
        ExistentCar['precio'] = price;
    }

    ReadCarsFunction();

    document.getElementById('form-cars').reset();
}

ReadCarsFunction();