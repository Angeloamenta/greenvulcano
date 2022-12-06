<template>
    <div class="home">
        <!-- top page logo -->
        <div class="top-page d-flex justify-content-center align-items-center">

            <!-- logo -->

            <img alt="Vue logo" src="../assets/img/GREENVULCANO_TECNOLOGIE_MAIN.png">
        </div>

        <!-- bottom page -->
        <div class="bottom-page d-flex justify-content-center align-items-center py-5">

            <!-- bottom container -->
            <div class="bottom-container">

                <!-- inner container -->
                <div class="innercontainer-top d-flex align-items-center justify-content-between">

                    <!-- search -->
                    <div class="search-container ">
                     <input class="search" type="text" placeholder="Search">
                    </div>

                    <!-- button-dx -->
                    <div class="button-dx d-flex align-items-center">

                      <!-- add item   -->
                        <div class="add-item">
                            <button class="add">
                                add item
                            </button>
                        </div>
                        <div class="filter-button">
                            <button class="filter">
                                <img src="../assets/img/filter_icon.svg" alt="">
                            </button>
                        </div>
                    </div>
                </div>

                <!-- inner continer center -->
                <div class="innercontainer-center">
                    <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">id</th>
                                <th scope="col">Model</th>
                                <th scope="col">Location</th>
                                <th scope="col">Creation Date</th>
                                <th scope="col">Battery Health</th>
                                <th scope="col">Fuel</th>
                                <th scope="col">Damage</th>
                                <th scope="col"></th>

                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                <th scope="row">1</th>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>
                                <td>@mdo</td>


                                </tr>

                                <tr>
                                <th scope="row">2</th>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                </tr>

                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>

                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>

                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>

                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>

                                <tr>
                                <th scope="row">3</th>
                                <td>Larry</td>
                                <td>the Bird</td>
                                <td>@twitter</td>
                                </tr>



                            </tbody>
                        </table>
                </div>

                <!-- inner container bottom  -->
                <div class="innercontainer-bottom d-flex align-items-center justify-content-between my-2">

                    <!-- download csv -->
                    <div class="download">
                        <button>
                            download csv
                        </button>
                    </div>

                    <!-- paginate button -->

                    <div class="paginate-button d-flex align-items-center">

                        <div class="arrow-sx">
                            <button>
                                <img src="../assets/img/Raggruppa 5329.svg" alt="">
                            </button>
                        </div>

                        <div class="paginate-center">
                            <button>1</button>
                            <button class="button-selected mx-1">2</button>
                            <button>3</button>

                        </div>

                        <div class="arrow-dx">
                            <button>
                                <img src="../assets/img/Raggruppa 5330.svg" alt="">
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Homepage',
    props: {
      msg: String
    }
  }
  </script>
  
  <style scoped lang="scss">
@import "../assets/scss/partials/_variables.scss";


//  top page
 .top-page {
    background: $white;
    width: 100%;
    height: 200px;

    img {
        width: 262px;
        height: 121px;
    }
 }

//  bottom page

 .bottom-page {
    background: $pearl;
    width: 100%;
    min-height: calc(100vh - 100px);

    .bottom-container {
        width: 70%;
        height: 70%;
        // background: white;

        .innercontainer-top {

            // search container
            .search-container {
                padding: 10px 0;

                // search
                .search {
                    width: 326px;
                    height: 48px;
                    box-shadow: 0px 3px 6px #00000029;
                    border: 1px solid $lgray;
                    border-radius: 8px 0px 8px 8px;
                    padding-left:25px;
                }

            }

             // button dx //
             .button-dx {
                    .add-item {
                        border-right: 1px solid $lgray;
                        padding-right: 20px;
                        .add {
                            width: 134px;
                            height: 34px;
                            text-transform: uppercase;
                            background: $teal;
                            color: $white;
                            border-radius: 8px 0px 8px 8px;
                            padding: 5px 20px;
                            border: none;
                            font: normal normal bold 12px/14px Roboto;;
                        }
                    }

                    .filter-button {
                        padding-left: 20px;
                        .filter {
                            background: $dark-blue;
                            width: 32px;
                            border: none;
                            border-radius: 8px 0px 8px 8px;
                            padding: 4px;
                            img {
                                width: 80%;
                                height: 80%;
                            }
                        }
                    }
                }
            
        }

        // inner container center 

        .innercontainer-center {
            min-height: 600px;
            background: $white;
            box-shadow: 0px 2px 4px #00000029;
            border-radius: 8px 0px 8px 8px;

            table {

                thead {

                    background: $lgray;
                }
            }
        }


        // inner container bottom 
        .innercontainer-bottom {

            .download {
                button {
                     background: $dark-blue;
                     width: 156px;
                     height: 32px;
                     border: none;
                     border-radius: 8px 0px 8px 8px;
                     padding: 5px 20px;
                     text-transform: uppercase;
                     color: $white;
                     font: normal normal bold 12px/14px Roboto;;
                }

            }
            .paginate-button {

                button {
                    background: $dark-blue;
                            width: 32px;
                            height: 32px;
                            border: none;
                            border-radius: 8px 0px 8px 8px;
                            padding: 4px;
                            
                }

                .arrow-sx {
                    padding-right: 16px;
                    button {
                        background: $white;
                        border: 1px solid $dark-blue;
                        
                    }
                }

                .paginate-center {
                    button {
                        background: $white;
                        border: 1px solid $dark-blue;
                        font: normal normal bold 12px/14px Roboto;
                    }

                    .button-selected {
                        background: $dark-blue;
                        border: none;
                        text-transform: uppercase;
                        color: $white;
                    }
                }

                .arrow-dx {
                    padding-left: 16px;
                    button {

                        background: $gray;
                    }
                }
    
            }
            
        }

    }
 }

</style>