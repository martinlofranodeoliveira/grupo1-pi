const path = require("path");

const homeController = {
  selecaoPlano: (req, res) => {
    res.render("plano-usuario", {
      title: "Seleção de Plano Usuário",
    });
  },

  selecaoPlanoProfissional: (req, res) => {
    res.render("plano-parceiro", {
      title: "Seleção de Plano parceiro",
    });
  },

  checkout: (req, res) => {
    res.render("checkout", {
      title: "Finalização de Compra",
    });
  },

  checkoutPlanos: (req, res) => {
    res.render("checkout-planos", {
      title: "Finalização de Compra Planos",
    });
  },
};

module.exports = homeController;
