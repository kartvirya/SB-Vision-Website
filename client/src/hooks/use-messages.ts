import { useMutation } from "@tanstack/react-query";
import { useToast } from "@/hooks/use-toast";

export interface InsertMessage {
  name: string;
  email: string;
  message: string;
}

export interface InsertSubscriber {
  email: string;
}

export function useSendMessage() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: InsertMessage) => {
      // Simulate API call - in production, you'd send this to your backend/email service
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log("Message would be sent:", data);
      return { id: Date.now(), ...data, createdAt: new Date().toISOString() };
    },
    onSuccess: () => {
      toast({
        title: "Message Sent",
        description: "We'll get back to you shortly!",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message",
        variant: "destructive",
      });
    },
  });
}

export function useSubscribe() {
  const { toast } = useToast();
  return useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      // Simulate API call - in production, you'd send this to your email service
      await new Promise(resolve => setTimeout(resolve, 500));
      console.log("Subscription would be created:", data);
      return { id: Date.now(), ...data, createdAt: new Date().toISOString() };
    },
    onSuccess: () => {
      toast({
        title: "Subscribed!",
        description: "You've been added to our newsletter.",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: error.message || "Failed to subscribe",
        variant: "destructive",
      });
    },
  });
}
