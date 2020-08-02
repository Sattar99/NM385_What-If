var app = {
    permission: true,
    initialize: function() { document.addEventListener('deviceready', this.onDeviceReady.bind(this), false); },
    onDeviceReady: function() {
        var self = this;
        window.plugins.speechRecognition.hasPermission(
            function(permission) {
                if (!permission) {
                    window.plugins.speechRecognition.requestPermission(
                        function(permissionTrue) {
                            self.permission = true;
                            if (permissionTrue == 'OK') {
                                alert("Voice command access permission successfully accepted!");
                            } else {
                                alert("Permission to access voice command denied!");
                            }
                        },
                        function(erro) {
                            self.permission = false;
                            alert("permission error" + erro);
                        });
                }
            },
            function(error) {
                alert("erro");
                alert(error);
            });
    },
    stopCommand: function() {
        window.plugins.speechRecognition.stopListening(
            function() {
                alert("Voice command disabled!");
                var text = "";
                $("#texto").html("").append(text);
            },
            function() {
                alert("erro");
            });
    },
    voiceCommand: function() {
        var self = this;
        if (!self.permission) {
            alert("No permission to use the microphone");
            return false;
        }
        var options = { language: "pt-BR", showPartial: true, showPopup: false };
        window.plugins.speechRecognition.startListening(
            function(dados) {
                $.each(dados, function(key, texto) {
                    $("#texto").html("").append(texto);
                    if (texto == "Mount Everest") {
                        mounteverest();
                    } else if (texto == "Half dome") {
                        halfdome();
                    }
                });
            },
            function(erro) {
                alert("error: " + erro);
            },
            options);
    },
};
app.initialize();