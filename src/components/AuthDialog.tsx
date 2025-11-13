import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";

interface AuthDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess: (username: string) => void;
}

const AuthDialog = ({ open, onOpenChange, onSuccess }: AuthDialogProps) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username.trim()) {
      setError("Введите ник");
      return;
    }
    
    if (!password.trim() || password.length < 4) {
      setError("Пароль должен быть минимум 4 символа");
      return;
    }

    localStorage.setItem("poehali_user", JSON.stringify({ username, password }));
    onSuccess(username);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-2xl">
            <span>🚀</span>
            <span className="text-gradient font-heading">Вход в poehali.free</span>
          </DialogTitle>
          <DialogDescription>
            Создайте аккаунт, чтобы начать создавать сайты
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="username">Ваш ник</Label>
            <div className="relative">
              <Icon name="User" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                id="username"
                type="text"
                placeholder="vasya_2024"
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setError("");
                }}
                className="pl-10"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">Придумайте пароль</Label>
            <div className="relative">
              <Icon name="Lock" className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" size={18} />
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError("");
                }}
                className="pl-10"
              />
            </div>
          </div>
          {error && (
            <div className="text-sm text-destructive flex items-center gap-2">
              <Icon name="AlertCircle" size={16} />
              {error}
            </div>
          )}
          <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent">
            <Icon name="Rocket" className="mr-2" size={18} />
            Начать создавать
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
