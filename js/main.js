//Armo el header y nav del sitio con logo incluido

var elem = document.getElementById("headerid");
elem.innerHTML = `

<div class="logobox">
    <a href="index.html"> <img src="brotherhood.png"></a>
</div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
<div class="container-fluid">
    
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="index.html">Inicio</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="productos.html">Lista de productos</a>
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    CRUD
                </a>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="producto-create.html">Añadir producto nuevo</a></li>
                    <!--<li><a class="dropdown-item" href="#">Another action</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li> -->
                </ul>
            </li>
        </ul>
        <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
            <button class="btn btn-success" type="submit">Search</button>
        </form>
    </div>
</div>

</nav>
`

// Footer

var elem = document.getElementById("footerid");
elem.innerHTML = `

<!-- footer starts-->
    <footer>
        <div class="inner">
            <p class="card-text">Mesa de ayuda y soporte.</p>
            <a href="mailto:mesadeayuda@broderhood.com" class="btn btn-primary">Enviar un mail</a>
        </div>
        </div>
    </footer>`