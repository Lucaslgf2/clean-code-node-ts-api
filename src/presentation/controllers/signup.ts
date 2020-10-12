import { HttpRequest, HttpResponse } from '../protocols/http'
import { MissingParamError } from '../errors/missing-param-error'
import { badRequest } from '../helpers/http-helper'

export class SignUpController {
  handle (httpRequest: HttpRequest): HttpResponse {
    const camposObrigatorios = ['name', 'email', 'password']
    for (const campo of camposObrigatorios) {
      if (!httpRequest.body[campo]) {
        return badRequest(new MissingParamError(campo))
      }
    }
  }
}
