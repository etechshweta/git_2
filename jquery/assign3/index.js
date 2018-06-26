                    $(document).ready(function () {
                    $("#SingleClick").click(function (b) {
                        alert("Single Click");
                    });

                    $("#DoubleClick").dblclick(function () {
                        alert("Double Click");
                    });

                    $("#MouseOver").mouseover(function () {
                        $(this).css("background-color", "#306d6b");
                        $(this).fadeOut();
                        $(this).fadeIn();
                    });

                    $("#MouseEnter").mouseenter(function () {
                        $(this).css("background-color", "#64775c");
                        $(this).fadeOut();
                        $(this).fadeIn();
                    });
                    $("#MouseLeave").mouseleave(function () {
                        $(this).css("background-color", "#402f4f");
                        $(this).fadeOut();
                        $(this).fadeIn();
                    });
                    $("#MouseHover").hover(function () {
                        $(this).css("background-color", "#f4511e");
                    }, function () {
                        $(this).css("background-color", "white");
                    });
                    $("#Toggle").toggle(function () {
                        $(this).css("background-color", "#224070");
                    }, function () {
                        $(this).css("background-color", "red");
                    }, function () {
                        $(this).css("background-color", "yellow");
                    });
                });
                
        