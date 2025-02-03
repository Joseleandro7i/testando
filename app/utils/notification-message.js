import { toast } from 'sonner';
  
  /**
   * Exibe uma mensagem de notificação de sucesso.
   */
 export const notificationMessage = () => {
    toast.success('Obrigado por entrar em contato!', {
      description:
        'Aguardo sua escolha do provedor para processar sua mensagem. A partir disso, você terá a liberdade de selecionar o provedor de envio que mais lhe agrada.',
      closeButton: true,
      onAutoClose: false,
      unstyled: true,
      classNames: {
        toast: 'bg-slate-700 px-9 py-3 w-auto flex flex-col items-center',
        title: 'px-2',
        description: 'mt-2',
        closeButton: '',
      },
    });
  };