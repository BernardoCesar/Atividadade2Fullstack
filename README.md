# Documentação Endpoints

```{
  "openapi": "3.0.9",
  "info": {
    "title": "Meus Endpoints",
    "version": "1.0"
  },
  "servers": [
    {
      "url": "http://localhost:3000"
    }
  ],
  "components": {
    "schemas": {
      "Usuario": {
        "type": "object",
        "properties": {
          "nome": {
            "type": "string"
          },
          "senha": {
            "type": "string"
          },
          "pontos": {
            "type": "number"
          },
          "latitude": {
            "type": "number"
          },
          "longitude": {
            "type": "number"
          }
        }
      },
      "Reciclagem": {
        "type": "object",
        "properties": {
          "usuarioId": {
            "type": "string"
          },
          "item": {
            "type": "string"
          },
          "imagem": {
            "type": "string"
          },
          "peso": {
            "type": "number"
          },
          "data": {
            "type": "string"
          },
          "pontos": {
            "type": "string"
          }
        }
      }
    }
  },
  "paths": {
    "/usuario": {
      "post": {
        "operationId": "criarUsuario",
        "requestBody": {
          "content": {
            "application/json": {
              "schema": {
                "$ref": "#/components/schemas/Usuario"
              }
            }
          }
        },
        "responses": {
          "200": {
            "description": "Usuario criado com sucesso!",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "nome": {
                      "type": "string"
                    },
                    "senha": {
                      "type": "number"
                    },
                    "pontos": {
                      "type": "number"
                    },
                    "latitude": {
                      "type": "number"
                    },
                    "longitude": {
                      "type": "number"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Erro!"
          }
        }
      }
    },
    "/reciclagem/{id}": {
      "get": {
        "parameters": [
          {
            "in": "path",
            "name": "id",
            "required": true,
            "schema": {
              "$ref": "#/components/schemas/Reciclagem"
            }
          }
        ],
        "operationId": "obterTodasReciclagens",
        "responses": {
          "200": {
            "description": "Listagem de todas as reciclagens do usuario",
            "content": {
              "application/json": {
                "schema": {
                  "type": "object",
                  "properties": {
                    "usuarioId": {
                      "type": "string"
                    },
                    "item": {
                      "type": "string"
                    },
                    "imagem": {
                      "type": "string"
                    },
                    "peso": {
                      "type": "number"
                    },
                    "data": {
                      "type": "string"
                    },
                    "pontos": {
                      "type": "string"
                    }
                  }
                }
              }
            }
          },
          "400": {
            "description": "Erro!"
          },
          "404": {
            "description": "Id não foi encontrado"
          }
        }
      }
    }
  }
}```
