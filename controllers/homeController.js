const path = require("path");
const { validationResult } = require("express-validator");
const homeContato = require("../models/Home");

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

  contato: (req, res) => {
    const resultValidation = validationResult(req);
    if (resultValidation.errors.length > 0) {
      return res.render("index", {
        title: "Contato",
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
    }
    let contato = {
      ...req.body,
    };
    let contatoCreate = homeContato.create(contato);
    res.redirect("/");
  }
};

module.exports = homeController;
