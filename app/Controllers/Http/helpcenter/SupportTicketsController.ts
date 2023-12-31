import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SupportTicketService from 'App/services/helpcenter/SupportTicketService'

export default class SupportTicketsController {
  public async index({ request, view }: HttpContextContract) {
    const qs = request.qs() as any
    // const records = await SupportTicketService.index(qs)
    return view.render('admin/help-center/support-tickets/index')
  }

  public async store({ request, response }: HttpContextContract) {
    const payload = await request.validate({} as any)
    const record = await SupportTicketService.store(payload)
    return response.json({ message: 'record created', data: record })
  }

  public async show({ params, response, request }: HttpContextContract) {
    const qs = request.qs() as any
    const record = await SupportTicketService.show(+params.id, qs)
    response.json(record)
  }

  public async update({ request, response, params }: HttpContextContract) {
    const payload = await request.validate({} as any)
    const record = await SupportTicketService.update(params.id, payload)
    return response.json({ message: 'record updated', data: record })
  }

  public async destroy({ params, response }: HttpContextContract) {
    await SupportTicketService.destroy(+params.id)
    return response.json({ message: 'record deleted' })
  }
}
