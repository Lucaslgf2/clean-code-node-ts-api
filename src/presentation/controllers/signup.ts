import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'
import { Controller } from '../protocols/controller'

export class SignUpController implements Controller {
  handle (httpRequest: HttpRequest): HttpResponse {
    const camposObrigatorios = ['name', 'email', 'password', 'passwordConfirmation']
    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return badRequest(new MissingParamError(campo))
      }
    }
  }
}
